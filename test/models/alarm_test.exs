defmodule TrainWhistle.AlarmTest do
  use TrainWhistle.ModelCase

  alias TrainWhistle.Alarm

  @valid_attrs %{end_time: %{hour: 14, min: 0, sec: 0}, last_notified: %{day: 17, hour: 14, min: 0, month: 4, sec: 0, year: 2010}, start_time: %{hour: 14, min: 0, sec: 0}, travel_time: 42, name: "my first alarm"}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    changeset = Alarm.changeset(%Alarm{}, @valid_attrs)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Alarm.changeset(%Alarm{}, @invalid_attrs)
    refute changeset.valid?
  end
end
