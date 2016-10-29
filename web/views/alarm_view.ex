defmodule TrainWhistle.AlarmView do
  use TrainWhistle.Web, :view

  def render("index.json", %{alarms: alarms}) do
    render_many(alarms, TrainWhistle.AlarmView, "alarm.json")
  end

  def render("show.json", %{alarm: alarm}) do
    render_one(alarm, TrainWhistle.AlarmView, "alarm.json")
  end

  def render("alarm.json", %{alarm: alarm}) do
    %{id: alarm.id,
      start_time: alarm.start_time,
      end_time: alarm.end_time,
      travel_time: alarm.travel_time,
      last_notified: alarm.last_notified,
      start_location_id: alarm.start_location_id}
  end
end
