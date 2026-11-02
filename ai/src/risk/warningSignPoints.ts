import type { WarningSign } from "../types/WarningSign.ts"

export const warningSignPoints: Record<WarningSign, number> = {
  payLate: 30,
  foodLow: 20,
  managerSilent: 10,
  contractFinished: 10,
  detainedOnce: 10,
  detainedTwiceOrMore: 20,
  flagChanged: 10,
  ownerLeftCrewBefore: 20,
}
