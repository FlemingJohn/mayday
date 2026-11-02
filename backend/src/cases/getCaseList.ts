import { getDatabase } from "../lib/getDatabase.ts"
import { riskLevelRank } from "../lib/riskLevelRank.ts"
import type { ShipCase } from "../types/ShipCase.ts"

const selectCases = `
  select ship_key as shipKey, ship_name as shipName, risk_level as riskLevel, report_count as reportCount,
    wages_owed_total as wagesOwedTotal, case_status as caseStatus, taken_by as takenBy, updated_at as updatedAt
  from ship_cases
  where case_status != ?`

export function getCaseList(): ShipCase[] {
  const cases = getDatabase().prepare(selectCases).all("solved") as unknown as ShipCase[]
  return cases.sort((first, second) =>
    riskLevelRank[second.riskLevel] - riskLevelRank[first.riskLevel]
    || second.updatedAt.localeCompare(first.updatedAt))
}
