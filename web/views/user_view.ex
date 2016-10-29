defmodule TrainWhistle.UserView do
  use TrainWhistle.Web, :view
  use JaSerializer.PhoenixView

  @attributes ~w(id email phone)a
  attributes [:id, :email, :phone, :first_name, :last_name]

  def render("show.json", %{user: user}) do
    render_user(user)
  end

  def render("login.json", %{user: user, jwt: jwt, exp: exp}) do
    %{user: render_user(user),
      access_token: jwt,
      exp: exp}
  end

  def render_user(user) do
    user |> Map.take(@attributes)
  end
end
