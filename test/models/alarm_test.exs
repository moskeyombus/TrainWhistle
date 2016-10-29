defmodule TrainWhistle.AlarmTest do
  use TrainWhistle.ModelCase

  alias TrainWhistle.Alarm

  @valid_attrs %{end_time: %{hour: 14, min: 0, sec: 0}, start_time: %{hour: 14, min: 0, sec: 0}, travel_time: 42, name: "my first alarm", direction: "w", line: "blue", user_id: 3}
  @invalid_attrs %{}

  test "changeset with valid attributes" do
    params = Map.put(@valid_attrs, :start_location, "hello")
    changeset = Alarm.changeset(%Alarm{}, params)
    assert changeset.valid?
  end

  test "changeset with invalid attributes" do
    changeset = Alarm.changeset(%Alarm{}, @invalid_attrs)
    refute changeset.valid?
  end
end
