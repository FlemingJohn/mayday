import type { WarningSign } from "../types/WarningSign.ts"
import { warningSignPoints } from "./warningSignPoints.ts"

export function getRiskScore(signs: WarningSign[]): number {
  const total = signs.reduce((sum, sign) => sum + warningSignPoints[sign], 0)
  return Math.min(100, total)
}
