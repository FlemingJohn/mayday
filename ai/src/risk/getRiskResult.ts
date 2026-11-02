import type { RiskInput } from "../types/RiskInput.ts"
import type { RiskResult } from "../types/RiskResult.ts"
import { getMonthsUnpaid } from "./getMonthsUnpaid.ts"
import { getRiskLevel } from "./getRiskLevel.ts"
import { getRiskScore } from "./getRiskScore.ts"
import { getWagesOwed } from "./getWagesOwed.ts"
import { getWarningSigns } from "./getWarningSigns.ts"

export function getRiskResult(input: RiskInput): RiskResult {
  const monthsUnpaid = getMonthsUnpaid(input.unpaidSinceMonth, input.reportedAt)
  const warningSigns = getWarningSigns(input, monthsUnpaid)
  const score = getRiskScore(warningSigns)
  return {
    monthsUnpaid,
    wagesOwed: getWagesOwed(monthsUnpaid, input.monthlyWage),
    score,
    level: getRiskLevel(score),
    warningSigns,
  }
}
