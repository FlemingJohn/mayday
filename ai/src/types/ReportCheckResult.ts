import type { Advice } from "./Advice.ts"
import type { CombinedFacts } from "./CombinedFacts.ts"
import type { Evidence } from "./Evidence.ts"
import type { RiskResult } from "./RiskResult.ts"

export type ReportCheckResult = {
  reportId: string
  isEmergency: boolean
  facts: CombinedFacts
  evidence: Evidence | null
  risk: RiskResult
  advice: Advice
  wasScoredInSandbox: boolean
}
