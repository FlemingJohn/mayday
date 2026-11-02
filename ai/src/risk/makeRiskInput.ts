import type { CombinedFacts } from "../types/CombinedFacts.ts"
import type { Evidence } from "../types/Evidence.ts"
import type { RiskInput } from "../types/RiskInput.ts"

export function makeRiskInput(facts: CombinedFacts, evidence: Evidence | null, reportedAt: string): RiskInput {
  return {
    unpaidSinceMonth: facts.unpaidSinceMonth,
    reportedAt,
    monthlyWage: facts.monthlyWage,
    isFoodLow: facts.isFoodLow === true,
    isManagerSilent: facts.isManagerResponding === false,
    isContractFinished: facts.isContractFinished === true,
    detentionCount: evidence?.detentionCount ?? 0,
    hasRecentFlagChange: evidence?.hasRecentFlagChange ?? false,
    ownerPastCaseCount: evidence?.ownerPastCaseCount ?? 0,
  }
}
