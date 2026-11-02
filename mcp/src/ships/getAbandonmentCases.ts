import { getShipDatabase } from "../lib/getShipDatabase.ts"
import type { AbandonmentCase } from "../types/AbandonmentCase.ts"

const selectCases = `
  select imo_number as imoNumber, ship_name as shipName, owner_name as ownerName,
    reported_on as reportedOn, status, crew_count as crewCount
  from abandonment_cases
  where imo_number = ? or lower(owner_name) = lower(?)
  order by reported_on desc`

export function getAbandonmentCases(imoNumber: string, ownerName: string): AbandonmentCase[] {
  return getShipDatabase().prepare(selectCases).all(imoNumber, ownerName) as unknown as AbandonmentCase[]
}
