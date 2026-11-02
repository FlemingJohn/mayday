import type { RiskLevel } from "../types/RiskLevel.ts"

export const riskLevelRank: Record<RiskLevel, number> = {
  okay: 0,
  watch: 1,
  urgent: 2,
}
