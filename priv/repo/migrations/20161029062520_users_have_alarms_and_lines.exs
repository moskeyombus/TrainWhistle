defmodule TrainWhistle.Repo.Migrations.UsersHaveAlarmsAndLines do
  use Ecto.Migration

  def change do
    alter table(:alarms) do
        add :direction, :string, null: false
        add :line, :string, null: false
        add :user_id, references(:users), null: false
    end
  end
end
