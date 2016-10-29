defmodule TrainWhistle.Twilio do
  @twilio_number_test "15005550006"
  @twilio_number "16785155423"
  use HTTPoison.Base

  def send_message(to, message) do
    data = %{
      :to => to,
      :from => @twilio_number,
      :body => message}
    ExTwilio.Message.create(data)
  end
end
