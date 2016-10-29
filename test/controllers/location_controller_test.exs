defmodule TrainWhistle.LocationControllerTest do
  use TrainWhistle.ConnCase

  alias TrainWhistle.Location

  setup %{conn: conn} do
    conn |> TrainWhistle.TestHelper.auth_setup
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, private_location_path(conn, :index)
    assert json_response(conn, 200) == []
  end

  test "shows chosen resource", %{conn: conn} do
    location = Repo.insert!(%Location{name: "myloc"})
    conn = get conn, private_location_path(conn, :show, location)
    assert json_response(conn, 200) == %{"id" => location.id, "name" => location.name}
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, private_alarm_path(conn, :show, -1)
    end
  end
end