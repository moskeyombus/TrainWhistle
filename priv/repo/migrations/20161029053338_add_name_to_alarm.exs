defmodule TrainWhistle.Repo.Migrations.AddNameToAlarm do
  use Ecto.Migration

  def change do
    alter table(:alarms) do
      add :name, :string, null: false
    end
  end
end
