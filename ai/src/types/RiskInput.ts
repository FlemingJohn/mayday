export type RiskInput = {
  unpaidSinceMonth: string | null
  reportedAt: string
  monthlyWage: number | null
  isFoodLow: boolean
  isManagerSilent: boolean
  isContractFinished: boolean
  detentionCount: number
  hasRecentFlagChange: boolean
  ownerPastCaseCount: number
}
