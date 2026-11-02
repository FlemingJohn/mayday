import { getEditDistance } from "../lib/getEditDistance.ts"
import { getShipDatabase } from "../lib/getShipDatabase.ts"
import { normalizeShipName } from "../lib/normalizeShipName.ts"
import type { Ship } from "../types/Ship.ts"

const selectShips = `
  select imo_number as imoNumber, name, ship_type as shipType, flag, owner_name as ownerName
  from ships`

export function findShipsByName(nameOrNumber: string): Ship[] {
  const ships = getShipDatabase().prepare(selectShips).all() as unknown as Ship[]
  const imoNumber = nameOrNumber.replace(/\D/g, "")
  if (imoNumber.length === 7) {
    return ships.filter((ship) => ship.imoNumber === imoNumber)
  }
  const wanted = normalizeShipName(nameOrNumber)
  return ships
    .map((ship) => ({ ship, distance: getEditDistance(wanted, normalizeShipName(ship.name)) }))
    .filter(({ distance }) => distance <= 2)
    .sort((first, second) => first.distance - second.distance)
    .slice(0, 5)
    .map(({ ship }) => ship)
}
