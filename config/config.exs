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

config :ex_twilio,
  account_sid: System.get_env("TWILIO_ACCOUNT_SID") || "${TWILIO_ACCOUNT_SID}",
  auth_token:  System.get_env("TWILIO_AUTH_TOKEN") || "${TWILIO_AUTH_TOKEN}",
  twilio_number: System.get_env("TWILIO_NUMBER") || "${TWILIO_NUMBER}"

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env}.exs"
