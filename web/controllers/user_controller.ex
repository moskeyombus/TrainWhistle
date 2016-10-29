defmodule TrainWhistle.UserController do
  use TrainWhistle.Web, :controller
  alias TrainWhistle.User

  def create(conn, %{"user" => user_params}) do
    changeset = User.registration_changeset(%User{}, user_params)

    case Repo.insert(changeset) do
      {:ok, user} ->
        conn
        |> put_status(:created)
        |> render("show.json", user: user)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(TrainWhistle.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def me(conn, _params) do
    user = Guardian.Plug.current_resource(conn)
    conn |> render("show.json", user: user)
  end

  def login(conn, params) do
    case User.authenticate(params) do
      {:ok, user} ->
        new_conn = Guardian.Plug.api_sign_in(conn, user)
        jwt = Guardian.Plug.current_token(new_conn)
        {:ok, claims} = Guardian.Plug.claims(new_conn)
        exp = Map.get(claims, "exp")

        new_conn
        |> put_resp_header("authorization", "Bearer #{jwt}")
        |> render("login.json", user: user, jwt: jwt, exp: exp)
      :error ->
        conn
        |> put_status(:unauthorized)
        |> json(%{message: "Incorrect email/password"})
    end
  end

  def update(conn, %{"user" => params}) do
    user = Guardian.Plug.current_resource(conn)
    changeset = User.changeset(user, params)

    case Repo.update(changeset) do
      {:ok, user} ->
        render(conn, "show.json", user: user)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(TrainWhistle.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def unauthenticated(conn, _) do
    conn 
    |> put_status(:unauthorized)
    |> json(%{message: "Not authorized"})
  end
end
