use Mix.Config

# Configure your database
config :train_whistle, TrainWhistle.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "jake",
  password: "",
  database: "train_whistle_dev",
  hostname: "localhost",
  pool_size: 10
