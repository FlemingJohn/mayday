import type { RiskResult } from "./RiskResult.ts"

export type ScoredRisk = {
  result: RiskResult
  wasScoredInSandbox: boolean
}
