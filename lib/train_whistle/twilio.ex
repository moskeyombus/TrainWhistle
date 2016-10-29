defmodule TrainWhistle.Twilio do
    
 use HTTPoison.Base

 @type data :: map | list

 @spec send_message(map) :: true | false
  def send_message(to, message \\ []) do
  data = %{:to => to,  :from => 1, :message => message}
   true
  end

end