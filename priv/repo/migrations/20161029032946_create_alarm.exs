defmodule TrainWhistle.Repo.Migrations.CreateAlarm do
  use Ecto.Migration

  def change do
    create table(:alarms) do
      add :start_time, :time
      add :end_time, :time
      add :travel_time, :integer
      add :last_notified, :datetime
      add :start_location_id, references(:locations, on_delete: :nothing)

      timestamps()
    end
    create index(:alarms, [:start_location_id])

  end
end
