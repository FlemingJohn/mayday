import type { RiskLevel } from "../types/RiskLevel.ts"

export function getRiskLevel(score: number): RiskLevel {
  if (score >= 70) {
    return "urgent"
  }
  if (score >= 40) {
    return "watch"
  }
  return "okay"
}
