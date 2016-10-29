defmodule TrainWhistle.Arrivals do
  @marta_url "http://marta-api.herokuapp.com/arrivals"

  def arrivals do
    HTTPoison.get @marta_url
  end

  def parsed_arrivals do
    case arrivals do
      { :ok, resp } -> Poison.Parser.parse! resp.body
      # not sure what to do with this...
      { err, _ } -> err
    end
  end

  def next_arrival(lat, long, direction) do
    station = station_nearest(lat, long)
    next_arrival(station, direction)
  end

  def next_arrival(station, direction) do
    parsed_arrivals
    |> Enum.find(fn i -> i["station"] == station and i["direction"] == direction end)
  end


  def station_nearest(lat, long) do
    [ res | _ ] = Enum.sort(station_locations, fn (s1, s2) -> closest_distance(s1,s2,lat,long) end)
    elem(res, 0)
  end

  def closest_distance(kv1, kv2, lat, long) do
    {_, v1} = kv1
    {_, v2} = kv2
    dist(lat, long, v1.latitude, v1.longitude) < dist(lat, long, v2.latitude, v2.longitude)
  end

  def dist(lat1, long1, lat2, long2) do
    lat = lat2 - lat1
    long = long2 - long1
    :math.sqrt(lat * lat + long * long)
  end

  def station_locations do
    %{
      "bankhead station" => %{
        latitude: 33.772979,
        longitude: -84.428537
      },
      "midtown station" => %{
        latitude: 33.780737,
        longitude: -84.386657
      },
      "indian creek station" => %{
        latitude: 33.769212,
        longitude: -84.229255
      },
      "garnett station" => %{
        latitude: 33.748938,
        longitude: -84.395513
      },
      "college park station" => %{
        latitude: 33.6513813,
        longitude: -84.4470162
      },
      "ashby station" => %{
        latitude: 33.756289,
        longitude: -84.41755599999999
      },
      "five points station" => %{
        latitude: 33.754061,
        longitude: -84.391539
      },
      "airport station" => %{
        latitude: 33.639975,
        longitude: -84.44403199999999
      },
      "sandy springs station" => %{
        latitude: 33.9321044,
        longitude: -84.3513524
      },
      "lindbergh station" => %{
        latitude: 33.823698,
        longitude: -84.369248
      },
      "lakewood station" => %{
        latitude: 33.700649,
        longitude: -84.429541
      },
      "chamblee station" => %{
        latitude: 33.8879695,
        longitude: -84.30468049999999
      },
      "king memorial station" => %{
        latitude: 33.749468,
        longitude: -84.37601099999999
      },
      "east lake station" => %{
        latitude: 33.765062,
        longitude: -84.31261099999999
      },
      "vine city station" => %{
        latitude: 33.756612,
        longitude: -84.404348
      },
      "buckhead station" => %{
        latitude: 33.847874,
        longitude: -84.367296
      },
      "lenox station" => %{
        latitude: 33.845137,
        longitude: -84.357854
      },
      "civic center station" => %{
        latitude: 33.766245,
        longitude: -84.38750399999999
      },
      "arts center station" => %{
        latitude: 33.789283,
        longitude: -84.387125
      },
      "west end station" => %{
        latitude: 33.73584,
        longitude: -84.412967
      },
      "dunwoody station" => %{
        latitude: 33.9486029,
        longitude: -84.355848
      },
      "omni dome station" => %{
        latitude: 33.7489954,
        longitude: -84.3879824
      },
      "oakland city station" => %{
        latitude: 33.71726400000001,
        longitude: -84.42527899999999
      },
      "east point station" => %{
        latitude: 33.676609,
        longitude: -84.440595
      },
      "doraville station" => %{
        latitude: 33.9026881,
        longitude: -84.28025099999999
      },
      "brookhaven station" => %{
        latitude: 33.859928,
        longitude: -84.33922
      },
      "decatur station" => %{
        latitude: 33.774455,
        longitude: -84.297131
      },
      "medical center station" => %{
        latitude: 33.9106263,
        longitude: -84.3513751
      },
      "georgia state station" => %{
        latitude: 33.749732,
        longitude: -84.38569700000001
      },
      "avondale station" => %{
        latitude: 33.77533,
        longitude: -84.280715
      },
      "inman park station" => %{
        latitude: 33.757317,
        longitude: -84.35262
      },
      "kensington station" => %{
        latitude: 33.772093,
        longitude: -84.252217
      },
      "edgewood candler park station" => %{
        latitude: 33.761812,
        longitude: -84.340064
      },
      "peachtree center station" => %{
        latitude: 33.759532,
        longitude: -84.387564
      },
      "north ave station" => %{
        latitude: 33.771696,
        longitude: -84.387411
      }
    }
  end
end
