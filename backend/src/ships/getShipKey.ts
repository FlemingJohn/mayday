import type { ReportCheckResult } from "@mayday/ai/types/ReportCheckResult.ts"

export function getShipKey(result: ReportCheckResult): string {
  const imoNumber = result.evidence?.imoNumber ?? result.facts.imoNumber
  if (imoNumber) {
    return imoNumber
  }
  const shipName = result.facts.shipName ?? "unknown ship"
  return `name:${shipName.toUpperCase().replace(/[^A-Z0-9]/g, "")}`
}
