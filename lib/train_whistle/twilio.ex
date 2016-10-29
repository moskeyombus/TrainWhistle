defmodule TrainWhistle.Twilio do
  use HTTPoison.Base

  def send_message(to, message) do
    data = %{
      :to => to,
      :from => Application.get_env(:ex_twilio, :twilio_number),
      :body => message}
    ExTwilio.Message.create(data)
  end
end
