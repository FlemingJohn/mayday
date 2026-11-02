import type { RiskLevel } from "../types/RiskLevel.ts"
import { riskLevelRank } from "./riskLevelRank.ts"

export function getMoreSeriousLevel(first: RiskLevel, second: RiskLevel): RiskLevel {
  return riskLevelRank[first] >= riskLevelRank[second] ? first : second
}
