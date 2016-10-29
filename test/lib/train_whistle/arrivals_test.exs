defmodule TrainWhistle.ArrivalsTest do
  use ExUnit.Case, async: false
  use ExVCR.Mock, adapter: ExVCR.Adapter.Hackney
  alias TrainWhistle.Arrivals

  setup_all do
    HTTPoison.start
  end

  test "nearest_arrival/3" do
    use_cassette "marta_api" do
      resp = Arrivals.next_arrival(33.754061, -84.391539,"w")
      assert(resp["station"] == "five points station")
    end
  end

  test "next_arrival/2" do
    use_cassette "marta_api" do
      resp = Arrivals.next_arrival("five points station","s")
      assert(resp["station"] == "five points station")
    end
  end

  test "next_arrival/2 with error" do
    use_cassette "marta_api_erroring" do
      resp = Arrivals.next_arrival("five points station","s")
      assert(resp == nil)
    end
  end
end
