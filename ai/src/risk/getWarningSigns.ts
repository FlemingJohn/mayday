import type { RiskInput } from "../types/RiskInput.ts"
import type { WarningSign } from "../types/WarningSign.ts"

export function getWarningSigns(input: RiskInput, monthsUnpaid: number): WarningSign[] {
  const checks: [WarningSign, boolean][] = [
    ["payLate", monthsUnpaid >= 2],
    ["foodLow", input.isFoodLow],
    ["managerSilent", input.isManagerSilent],
    ["contractFinished", input.isContractFinished],
    ["detainedOnce", input.detentionCount === 1],
    ["detainedTwiceOrMore", input.detentionCount >= 2],
    ["flagChanged", input.hasRecentFlagChange],
    ["ownerLeftCrewBefore", input.ownerPastCaseCount > 0],
  ]
  return checks.filter(([, isPresent]) => isPresent).map(([sign]) => sign)
}
