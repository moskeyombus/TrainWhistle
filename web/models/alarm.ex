defmodule TrainWhistle.Alarm do
  use TrainWhistle.Web, :model
  use Timex.Ecto.Timestamps

  schema "alarms" do
    field :start_time, Timex.Ecto.Time
    field :end_time, Timex.Ecto.Time
    field :travel_time, :integer
    field :last_notified, Timex.Ecto.DateTime
    field :name, :string
    field :direction, :string
    field :line, :string

    # Associations
    belongs_to :start_location, TrainWhistle.Location
    belongs_to :user, TrainWhistle.User

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:start_time, :end_time, :travel_time, :last_notified, :name, :direction, :line, :user_id])
    |> validate_required([:start_time, :end_time, :travel_time, :last_notified, :name, :direction, :line, :user_id])
  end
end
