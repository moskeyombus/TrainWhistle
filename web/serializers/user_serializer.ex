defmodule TrainWhistle.UserSerializer do
  use JaSerializer

  location "/users/:id"
  attributes [:email, :phone]
end
