defmodule TrainWhistle.ArrivalsTest do
  use ExUnit.Case, async: false
  use ExVCR.Mock, adapter: ExVCR.Adapter.Hackney
  alias TrainWhistle.Arrivals

  setup_all do
    HTTPoison.start
  end

  test "nearest_arrival/3" do
    use_cassette "marta_api" do
      resp = Arrivals.next_arrival(1,1,"e")
      assert(resp["station"] == "indian creek station")
    end
  end

  test "next_arrival/2" do
    use_cassette "marta_api" do
      resp = Arrivals.next_arrival("indian creek station","e")
      assert(resp["station"] == "indian creek station")
    end
  end
end
