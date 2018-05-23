defmodule Ettin.OutputChannel do
  use Phoenix.Channel

  def join("output", _message, socket) do
    {:ok, socket}
  end
end