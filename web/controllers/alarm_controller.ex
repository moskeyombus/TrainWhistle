defmodule TrainWhistle.AlarmController do
  use TrainWhistle.Web, :controller

  alias TrainWhistle.Alarm
  alias TrainWhistle.Repo

  def index(conn, _params) do
    user = Guardian.Plug.current_resource(conn)
    |> Repo.preload(:alarms)
    render(conn, "index.json", alarms: user.alarms)
  end

  def create(conn, %{"alarm" => alarm_params}) do
    user = Guardian.Plug.current_resource(conn)
    changeset = Alarm.changeset %Alarm{user_id: user.id}, alarm_params

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
    user = Guardian.Plug.current_resource(conn)
    alarm = Repo.get_by!(Alarm, id: id, user_id: user.id)
    render(conn, "show.json", alarm: alarm)
  end

  def update(conn, %{"id" => id, "alarm" => alarm_params }) do
    user = Guardian.Plug.current_resource(conn)
    alarm = Repo.get_by!(Alarm, id: id, user_id: user.id)
    changeset = Alarm.changeset alarm, alarm_params

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
    user = Guardian.Plug.current_resource(conn)
    alarm = Repo.get_by!(Alarm, id: id, user_id: user.id)

    # Here we use delete! (with a bang) because we expect
    # it to always work (and if it does not, it will raise).
    Repo.delete!(alarm)

    send_resp(conn, :no_content, "")
  end
end
