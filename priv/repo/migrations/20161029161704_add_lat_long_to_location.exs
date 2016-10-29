defmodule TrainWhistle.Repo.Migrations.AddLatLongToLocation do
  use Ecto.Migration

  def change do
    alter table(:locations) do
      add :lat, :float
      add :long, :float
    end
  end
end
