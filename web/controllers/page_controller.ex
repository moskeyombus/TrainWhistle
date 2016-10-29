defmodule TrainWhistle.PageController do
  use TrainWhistle.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
