import type { CaseStatus } from "./CaseStatus.ts"
import type { RiskLevel } from "./RiskLevel.ts"

export type ShipCase = {
  shipKey: string
  shipName: string
  riskLevel: RiskLevel
  reportCount: number
  wagesOwedTotal: number
  caseStatus: CaseStatus
  takenBy: string | null
  updatedAt: string
}
