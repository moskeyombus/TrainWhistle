defmodule TrainWhistle.LocationTest do
  use TrainWhistle.ModelCase

  alias TrainWhistle.Location

  @valid_attrs %{name: "some content"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Location.changeset(%Location{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Location.changeset(%Location{}, @invalid_attrs)
    refute changeset.valid?
  end
end
