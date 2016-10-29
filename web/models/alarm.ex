defmodule TrainWhistle.Alarm do
  use TrainWhistle.Web, :model

  schema "alarm" do
    field :start_time, Ecto.Time
    field :end_time, Ecto.Time
    field :travel_time, :integer
    field :last_notified, Ecto.DateTime
    field :name, :string
    belongs_to :start_location, TrainWhistle.Location

    timestamps()
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:start_time, :end_time, :travel_time, :last_notified, :name])
    |> validate_required([:start_time, :end_time, :travel_time, :last_notified, :name])
  end
end
