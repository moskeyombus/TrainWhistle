defmodule TrainWhistle.UserControllerTest do
  use TrainWhistle.ConnCase

  alias TrainWhistle.User
  alias TrainWhistle.Repo
  @valid_attrs %{email: "foobar@me.com", password: "s3cr3t", phone: "1-777-777-7777", first_name: "foo", last_name: "bar"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    conn |> TrainWhistle.TestHelper.auth_setup
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, public_user_path(conn, :create), %{user: @valid_attrs}
    body = json_response(conn, 201)
    assert body["user"]["id"]
    assert body["user"]["email"]
    assert body["user"]["phone"]
    assert Repo.get_by(User, email: "foobar@me.com")
  end

  test "is able to log in", %{conn: conn} do
    conn = post conn, public_user_path(conn, :login), %{username: "me@mail.com", password: "pass"}
    body = json_response(conn, 200)
    assert body["user"]
    assert body["access_token"]
    assert body["exp"]
  end
end