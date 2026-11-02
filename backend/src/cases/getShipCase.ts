import { getDatabase } from "../lib/getDatabase.ts"
import type { ShipCase } from "../types/ShipCase.ts"

const selectShipCase = `
  select ship_key as shipKey, ship_name as shipName, risk_level as riskLevel, report_count as reportCount,
    wages_owed_total as wagesOwedTotal, case_status as caseStatus, taken_by as takenBy, updated_at as updatedAt
  from ship_cases
  where ship_key = ?`

export function getShipCase(shipKey: string): ShipCase | null {
  const row = getDatabase().prepare(selectShipCase).get(shipKey)
  return row === undefined ? null : (row as unknown as ShipCase)
}
