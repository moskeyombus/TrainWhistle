defmodule TrainWhistle.AlarmController do
  use TrainWhistle.Web, :controller

  alias TrainWhistle.Alarm

  def index(conn, _params) do
    alarms = Repo.all(Alarm)
    render(conn, "index.json", alarms: alarms)
  end

  def create(conn, %{"alarm" => alarm_params}) do
    changeset = Alarm.changeset(%Alarm{}, alarm_params)

    case Repo.insert(changeset) do
      {:ok, alarm} ->
        conn
        |> put_status(:created)
        |> render("show.json", alarm: alarm)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(TrainWhistle.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def show(conn, %{"id" => id}) do
    alarm = Repo.get!(Alarm, id)
    render(conn, "show.json", alarm: alarm)
  end

  def update(conn, %{"id" => id, "alarm" => alarm_params}) do
    alarm = Repo.get!(Alarm, id)
    changeset = Alarm.changeset(alarm, alarm_params)

    case Repo.update(changeset) do
      {:ok, alarm} ->
        render(conn, "show.json", alarm: alarm)
      {:error, changeset} ->
        conn
        |> put_status(:unprocessable_entity)
        |> render(TrainWhistle.ChangesetView, "error.json", changeset: changeset)
    end
  end

  def delete(conn, %{"id" => id}) do
    alarm = Repo.get!(Alarm, id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(alarm)

    send_resp(conn, :no_content, "")
  end
end
