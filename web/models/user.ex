defmodule TrainWhistle.User do
  use TrainWhistle.Web, :model
  alias TrainWhistle.Repo

  schema "users" do
    field :email, :string
    field :password_hash, :string
    field :phone, :string
    field :password, :string, virtual: true

    timestamps()
  end

  @doc """
  Authenticates a user by email and password
  returning the user entity if successful
  """
  def authenticate(params) do
    user = Repo.get_by(__MODULE__, email: params["email"])
    case check_pw(user, params["password"]) do
      true -> {:ok, user}
      _    -> :error
    end
  end

  defp check_pw(user, password) do
    case user do
      nil -> :error
      _   -> Comeonin.Bcrypt.checkpw(password, user.password_hash)
    end
  end

  @doc """
  Builds a changeset based on the `struct` and `params`.
  """
  def changeset(struct, params \\ %{}) do
    struct
    |> cast(params, [:email, :phone])
    |> validate_required([:email, :phone])
    |> validate_length(:email, min: 3, max: 255)
    |> validate_format(:email, ~r/@/, message: "not a valid email.")
    |> unique_constraint(:email)
  end

  @doc """
  Builds a registration changeset for a user
  """
  def registration_changeset(struct, params \\ %{}) do
    struct
    |> changeset(params)
    |> cast(params, [:password])
    |> validate_required(:password)
    |> validate_length(:password, min: 6, message: "password must be at least 6 characters.")
    |> hash_password
  end

  defp hash_password(changeset) do
    case changeset do
      %Ecto.Changeset{valid?: true, changes: %{password: pass}} ->
        put_change(changeset, :password_hash, Comeonin.Bcrypt.hashpwsalt(pass))
      _ ->
        changeset
    end
  end
end
