defmodule Ettin.PageController do
  use Ettin.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
