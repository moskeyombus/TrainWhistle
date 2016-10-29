# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     TrainWhistle.Repo.insert!(%TrainWhistle.SomeModel{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias TrainWhistle.Repo
alias TrainWhistle.Location

defmodule TrainWhistle.Seeder do
  def create_location({name, lat, long}) do
    case Repo.get_by(Location, name: name) do
      nil -> Repo.insert!(%Location{name: name, lat: lat, long: long})
      loc -> nil
    end
  end

  def station_locations do
    [{"bankhead station",              33.772979,         -84.428537},
     {"midtown station",               33.780737,         -84.386657},
     {"indian creek station",          33.769212,         -84.229255},
     {"garnett station",               33.748938,         -84.395513},
     {"college park station",          33.6513813,        -84.4470162},
     {"ashby station",                 33.756289,         -84.41755599999999},
     {"five points station",           33.754061,         -84.391539},
     {"airport station",               33.639975,         -84.44403199999999},
     {"sandy springs station" ,        33.9321044,        -84.3513524},
     {"lindbergh station",             33.823698,         -84.369248},
     {"lakewood station",              33.700649,         -84.429541},
     {"chamblee station",              33.8879695,        -84.30468049999999},
     {"king memorial station",         33.749468,         -84.37601099999999},
     {"east lake station",             33.765062,         -84.31261099999999},
     {"vine city station",             33.756612,         -84.404348},
     {"buckhead station",              33.847874,         -84.367296},
     {"lenox station",                 33.845137,         -84.357854},
     {"civic center station",          33.766245,         -84.38750399999999},
     {"arts center station",           33.789283,         -84.387125},
     {"west end station",              33.73584,          -84.412967},
     {"dunwoody station",              33.9486029,        -84.355848},
     {"omni dome station",             33.7489954,        -84.3879824},
     {"oakland city station",          33.71726400000001, -84.42527899999999},
     {"east point station",            33.676609,         -84.440595},
     {"doraville station",             33.9026881,        -84.28025099999999},
     {"brookhaven station",            33.859928,         -84.33922},
     {"decatur station",               33.774455,         -84.297131},
     {"medical center station",        33.9106263,        -84.3513751},
     {"georgia state station",         33.749732,         -84.38569700000001},
     {"avondale station",              33.77533,          -84.280715},
     {"inman park station",            33.757317,         -84.35262},
     {"kensington station",            33.772093,         -84.252217},
     {"edgewood candler park station", 33.761812,         -84.340064},
     {"peachtree center station",      33.759532,         -84.387564},
     {"north ave station",             33.771696,         -84.387411}]
  end
end

TrainWhistle.Seeder.station_locations
|> Enum.each(&TrainWhistle.Seeder.create_location/1)