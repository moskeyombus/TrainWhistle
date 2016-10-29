defmodule TrainWhistle.UserTest do
  use TrainWhistle.ModelCase

  alias TrainWhistle.User

  @valid_attrs %{email: "bart@simpson.com", password_hash: "supersecret", phone: "1-777-777-7777"}
  @registration_attrs %{email: "bart@simpson.com", password: "supersecret", phone: "1-777-777-7777"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = User.changeset(%User{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = User.changeset(%User{}, @invalid_attrs)
    refute changeset.valid?
  end

  test "registration_changeset, valid changeset" do
    changeset = User.registration_changeset(%User{}, @registration_attrs)
    assert changeset.changes.password_hash
    assert changeset.valid?
  end

  test "registration_changeset, password too short" do
    changeset = User.registration_changeset(
      %User{}, Map.put(@registration_attrs, :password, "12345")
    )
    refute changeset.valid?
  end

  test "can authenticate a user" do
    hash = Comeonin.Bcrypt.hashpwsalt("pass")
    {:ok, user} = TrainWhistle.Repo.insert(
      %User{email: "coolio", password_hash: hash}
    )
    {:ok, authenticated} = User.authenticate(
      %{"email" => "coolio", "password" => "pass"}
    )

    assert user == authenticated
  end
end
