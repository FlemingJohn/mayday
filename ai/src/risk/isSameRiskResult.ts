import type { RiskResult } from "../types/RiskResult.ts"

export function isSameRiskResult(first: RiskResult, second: RiskResult): boolean {
  return first.score === second.score
    && first.level === second.level
    && first.monthsUnpaid === second.monthsUnpaid
    && first.wagesOwed === second.wagesOwed
}
