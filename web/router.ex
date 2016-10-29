defmodule TrainWhistle.Router do
  use TrainWhistle.Web, :router

  pipeline :browser do
    plug :accepts, ["html"]
    plug :fetch_session
    plug :fetch_flash
    plug :protect_from_forgery
    plug :put_secure_browser_headers
  end

  pipeline :api do
    plug :accepts, ["json", "json-api"]
    plug Guardian.Plug.VerifyHeader, realm: "Bearer"
    plug Guardian.Plug.LoadResource
  end

  pipeline :authenticated do
    plug Guardian.Plug.EnsureAuthenticated, handler: TrainWhistle.UserController
  end

  scope "/", TrainWhistle do
    pipe_through :browser # Use the default browser stack

    get "/", PageController, :index
  end

  # Other scopes may use custom stacks.
  scope "/api", TrainWhistle do
    pipe_through :api

    scope as: :public do
      post "/users", UserController, :create
      post "/login", UserController, :login
    end

    scope as: :private do
      pipe_through :authenticated

      get "/users", UserController, :index
      resources "/alarms", AlarmController, except: [:new, :edit]
      resources "/locations", LocationController, only: [:index, :show]
      get "/users", UserController, :index
      patch "/users/:id", UserController, :update
    end
  end
end
