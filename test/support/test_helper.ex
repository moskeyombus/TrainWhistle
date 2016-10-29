defmodule TrainWhistle.TestHelper do
  alias TrainWhistle.User
  alias TrainWhistle.Repo

  def auth_setup(conn) do
    {:ok, user} = create_user
    {:ok, jwt, full_claims} = Guardian.encode_and_sign(user)
    new_conn = conn
    |> Plug.Conn.put_req_header("accept", "application/json")
    |> Plug.Conn.put_req_header("authorization", "Bearer #{jwt}")

    {:ok, %{conn: new_conn, user: user}}
  end

  def create_user do
    hash = Comeonin.Bcrypt.hashpwsalt("pass")
    Repo.insert %User{password_hash: hash, email: "me@mail.com"}
  end
end