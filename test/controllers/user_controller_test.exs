defmodule TrainWhistle.UserControllerTest do
  use TrainWhistle.ConnCase

  alias TrainWhistle.User
  alias TrainWhistle.Repo
  @valid_attrs %{email: "foobar@me.com", password: "s3cr3t", phone: "1-777-777-7777"}
  @invalid_attrs %{}

  setup %{conn: conn} do
    conn |> TrainWhistle.TestHelper.auth_setup
  end

  test "creates and renders resource when data is valid", %{conn: conn} do
    conn = post conn, public_user_path(conn, :create), @valid_attrs
    body = json_response(conn, 201)
    assert body["id"]
    assert body["email"]
    assert body["phone"]
    assert Repo.get_by(User, email: "foobar@me.com")
  end

  test "is able to log in", %{conn: conn} do
    conn = post conn, public_user_path(conn, :login), %{email: "me@mail.com", password: "pass"}
    body = json_response(conn, 200)
    assert body["user"]
    assert body["token"]
    assert body["exp"]
  end
end