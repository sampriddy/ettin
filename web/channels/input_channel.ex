defmodule Ettin.InputChannel do
  use Phoenix.Channel

  def join("input", _message, socket) do
    {:ok, socket}
  end

  def handle_in("user_input", user_input, socket) do
    #broadcast! socket, "new_msg", %{body: body}
    {:noreply, socket}
  end
end
