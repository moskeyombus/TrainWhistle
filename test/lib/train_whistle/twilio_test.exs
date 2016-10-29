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

    test "process_headers/2" do
        resp = Twilio.process_request_headers()
        assert(true == Keyword.equal?([Authorization: "Basic QUM2MDU2MTMxMzRlYjljYmQxMTU5YTU2MTRkZWEwMjdiYjpkOTMxNzQxZmYyZmEyZGI4MTA4MGY3OTgzNWYyZTM1ZA==", "Content-Type": "application/x-www-form-urlencoded"], resp))
    end

    test "url/3" do
        resp = Twilio.build_url()
        assert(resp = "https://api.twilio.com/2010-04-01/Accounts/AC605613134eb9cbd1159a5614dea027bb/Messages.json")
    end

end