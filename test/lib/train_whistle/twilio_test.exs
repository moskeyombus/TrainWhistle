defmodule TrainWhistle.TwilioTest do
  use ExUnit.Case, async: false
  alias TrainWhistle.Twilio

   setup_all do
    HTTPoison.start
  end

   test "send_message/1" do
      resp = Twilio.send_message( 1, 'test')
      assert(resp == true)
    end

end