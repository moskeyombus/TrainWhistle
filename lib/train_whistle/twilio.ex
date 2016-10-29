defmodule TrainWhistle.Twilio do
    
 use HTTPoison.Base

 @type data :: map | list

 @spec send_message(map) :: true | false
  def send_message(to, message \\ []) do
  data = %{:to => to,  :from => Application.get_env(:train_whistle, TrainWhistle.Repo)[:twilioNumber], :message => message}
  response = Twilio.post!("https://api.twilio.com/2010-04-01/Accounts/AC605613134eb9cbd1159a5614dea027bb/Messages.json",     'To=+15005559999&From=+15005550006&Body=Test twilio post',      %{"Authorization": "Basic QUM2MDU2MTMxMzRlYjljYmQxMTU5YTU2MTRkZWEwMjdiYjpkOTMxNzQxZmYyZmEyZGI4MTA4MGY3OTgzNWYyZTM1ZA==",        "Content-Type": "application/x-www-form-urlencoded"}    )
  #IO.write response
  true
  end

  @spec process_request_headers(list) :: list
  def process_request_headers(headers \\ []) do
      sid = Application.ge t_env(:train_whistle, TrainWhistle.Repo)[:twilioSid]
      authCode = Application.get_env(:train_whistle, TrainWhistle.Repo)[:twilioAuth]
    auth = Base.encode64("#{sid}:#{authCode}")
    headers
    |> Keyword.put(:"Content-Type", "application/x-www-form-urlencoded")
    |> Keyword.put(:"Authorization", "Basic #{auth}")
  end

   @spec build_url() :: String.t
  def build_url() do
    url = "https://api.twilio.com/2010-04-01/Accounts/"

    # Add Account SID segment if not already present
    url = url <> Application.get_env(:train_whistle, TrainWhistle.Repo)[:twilioSid]

    # Append .json
    url = url <> ".json"

  end

  @spec to_query_string(list) :: String.t
  def to_query_string(list) do
    list
    |> Enum.map(fn {key, value} -> {camelize(key), value} end)
    |> URI.encode_query
  end

end