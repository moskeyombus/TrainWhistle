defmodule TrainWhistle.UserView do
  use TrainWhistle.Web, :view
  @attributes ~w(id email phone)a

  def render("show.json", %{user: user}) do
    render_user(user)
  end

  def render("login.json", %{user: user, jwt: jwt, exp: exp}) do
    %{user: render_user(user),
      token: jwt,
      exp: exp}
  end

  def render_user(user) do
    user |> Map.take(@attributes)
  end
end