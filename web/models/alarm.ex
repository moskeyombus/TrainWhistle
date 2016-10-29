defmodule TrainWhistle.Alarm do
  use TrainWhistle.Web, :model
  use Timex.Ecto.Timestamps

  schema "alarms" do
    field :start_time, Timex.Ecto.Time
    field :end_time, Timex.Ecto.Time
    field :travel_time, :integer
    field :last_notified, Timex.Ecto.DateTime, default: DateTime.utc_now
    field :name, :string
    field :direction, :string
    field :line, :string

    # Associations
    belongs_to :start_location, TrainWhistle.Location
    belongs_to :user, TrainWhistle.User

    timestamps()
  end

  def human_direction(alarm) do
    case alarm.direction do
      "s" -> "south"
      "n" -> "north"
      "e" -> "east"
      "w" -> "west"
    end
  end

  # need to preload start_location...
  def station_name(alarm) do
    case alarm.start_location do
      nil -> "(unknown)"
      _ -> alarm.startLocation.name
    end
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:start_time, :end_time, :travel_time, :name, :direction, :line])
    |> validate_required([:start_time, :end_time, :travel_time, :name, :direction, :line])
  end
end
