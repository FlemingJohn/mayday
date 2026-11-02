import { getDatabase } from "../lib/getDatabase.ts"
import type { ShipCase } from "../types/ShipCase.ts"

const replaceShipCase = `insert or replace into ship_cases values (?, ?, ?, ?, ?, ?, ?, ?)`

export function saveShipCase(shipCase: ShipCase): void {
  getDatabase().prepare(replaceShipCase).run(
    shipCase.shipKey,
    shipCase.shipName,
    shipCase.riskLevel,
    shipCase.reportCount,
    shipCase.wagesOwedTotal,
    shipCase.caseStatus,
    shipCase.takenBy,
    shipCase.updatedAt,
  )
}
