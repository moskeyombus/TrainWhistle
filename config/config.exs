# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.
use Mix.Config

# General application configuration
config :train_whistle,
  ecto_repos: [TrainWhistle.Repo]

# Configures the endpoint
config :train_whistle, TrainWhistle.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "U8ZB4fiHrldwqFRzbrMdbvbFPZVcSSv4wg5/p+ncmLlkdK019i28R7GqYeNaP+re",
  render_errors: [view: TrainWhistle.ErrorView, accepts: ~w(html json)],
  pubsub: [name: TrainWhistle.PubSub,
           adapter: Phoenix.PubSub.PG2]

config :mime, :types, %{
  "application/vnd.api+json" => ["json-api"]
}

config :phoenix, :format_encoders,
  "json-api": Poison

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Configure Guardian
config :guardian, Guardian,
  allowed_algos: ["HS512"], # optional
  verify_module: Guardian.JWT,  # optional
  issuer: "TrainWhistle",
  ttl: { 30, :days },
  verify_issuer: true, # optional
  secret_key: System.get_env("GUARDIAN_SECRET_KEY"),
  serializer: TrainWhistle.GuardianSerializer

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
