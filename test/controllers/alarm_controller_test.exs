defmodule TrainWhistle.AlarmControllerTest do
  use TrainWhistle.ConnCase

  alias TrainWhistle.Alarm
  alias TrainWhistle.Repo
  alias TrainWhistle.Location
  @required_attrs %{name: "tempname", direction: "north", line: "red"}
  @valid_attrs @required_attrs |> Map.merge(%{end_time: %{hour: 14, min: 0, sec: 0}, last_notified: %{day: 17, hour: 14, min: 0, month: 4, sec: 0, year: 2010}, start_time: %{hour: 14, min: 0, sec: 0}, travel_time: 42})
  @invalid_attrs %{}

  setup %{conn: conn} do
    Repo.insert! %Location{name: "my_loc"}
    conn |> TrainWhistle.TestHelper.auth_setup
  end

  test "lists all entries on index", %{conn: conn} do
    conn = get conn, private_alarm_path(conn, :index)
    assert json_response(conn, 200)["alarms"] == []
  end

  test "shows chosen resource", %{conn: conn, user: user} do
    alarm = Repo.insert!(Map.merge(%Alarm{user_id: user.id}, @required_attrs))
    conn = get conn, private_alarm_path(conn, :show, alarm)
    res = json_response(conn, 200)["alarm"]
    assert res["id"] === alarm.id
  end

  test "renders page not found when id is nonexistent", %{conn: conn} do
    assert_error_sent 404, fn ->
      get conn, private_alarm_path(conn, :show, -1)
    end
  end

  test "creates and renders resource when data is valid", %{conn: conn, user: user} do
    loc = Repo.get_by(Location, name: "my_loc")
    conn = post conn, private_alarm_path(conn, :create), %{alarm: Map.put(@valid_attrs, :start_location, loc.id)}
    assert json_response(conn, 201)["alarm"]["id"]
    assert Repo.get_by(Alarm, user_id: user.id)
  end

  test "updates and renders chosen resource when data is valid", %{conn: conn, user: user} do
    loc = Repo.get_by(Location, name: "my_loc")
    alarm = Repo.insert!(Map.merge(%Alarm{user_id: user.id}, @required_attrs))
    conn = put conn, private_alarm_path(conn, :update, alarm), %{alarm: Map.put(@valid_attrs, :start_location, loc.id)}
    assert json_response(conn, 200)["alarm"]["id"]
    assert Repo.get_by(Alarm, user_id: user.id)
  end

  test "deletes chosen resource", %{conn: conn, user: user} do
    alarm = Repo.insert!(Map.merge(%Alarm{user_id: user.id}, @required_attrs))
    conn = delete conn, private_alarm_path(conn, :delete, alarm)
    assert response(conn, 204)
    refute Repo.get(Alarm, alarm.id)
  end
end
