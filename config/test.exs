use Mix.Config

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :train_whistle, TrainWhistle.Endpoint,
  http: [port: 4001],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

# Configure your database
config :train_whistle, TrainWhistle.Repo,
  adapter: Ecto.Adapters.Postgres,
  username: "postgres",
  password: "postgres",
  database: "train_whistle_test",
  hostname: "localhost",
  pool: Ecto.Adapters.SQL.Sandbox

config :guardian, Guardian,
  secret_key: "somuchverysecretkeywow"

import_config "test.secret.exs"
