defmodule TrainWhistle.LocationController do
  use TrainWhistle.Web, :controller

  alias TrainWhistle.Location
  alias TrainWhistle.Repo

  def index(conn, _params) do
    locations = Repo.all(Location)
    render(conn, "index.json", locations: locations)
  end

  def show(conn, %{"id" => id}) do
    location = Repo.get Location, id
    render(conn, "show.json", location: location)
  end
end