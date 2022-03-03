# copy-paste this in iex

defmodule Temp do
  import Ecto.Query

  alias Engine.UserVehicles.UserVehicle
  alias Engine.Repo

  def get_last_uv() do
    UserVehicle
    |> order_by([u], desc: u.inserted_at)
    |> limit(1)
    |> Repo.one()
    |> Repo.preload(:vehicle)
  end
end

uv = Temp.get_last_uv()
{uv.id, uv.vehicle.vin}
