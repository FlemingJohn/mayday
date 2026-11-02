import { getShipDatabase } from "../lib/getShipDatabase.ts"
import type { Inspection } from "../types/Inspection.ts"

const selectInspections = `
  select imo_number as imoNumber, inspected_on as inspectedOn, port, authority, is_detained as isDetained
  from inspections
  where imo_number = ?
  order by inspected_on desc`

export function getInspectionHistory(imoNumber: string): Inspection[] {
  const rows = getShipDatabase().prepare(selectInspections).all(imoNumber) as unknown as Inspection[]
  return rows.map((row) => ({ ...row, isDetained: Boolean(row.isDetained) }))
}
