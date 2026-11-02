import type { ReportCheckResult } from "@mayday/ai/types/ReportCheckResult.ts"
import { getMoreSeriousLevel } from "../lib/getMoreSeriousLevel.ts"
import { getShipKey } from "../ships/getShipKey.ts"
import type { RiskLevel } from "../types/RiskLevel.ts"
import type { ShipCase } from "../types/ShipCase.ts"
import { getShipCase } from "./getShipCase.ts"
import { saveShipCase } from "./saveShipCase.ts"

export function updateShipCase(result: ReportCheckResult): void {
  const shipKey = getShipKey(result)
  const existingCase = getShipCase(shipKey)
  const isFreshStart = existingCase === null || existingCase.caseStatus === "solved"
  saveShipCase(isFreshStart ? makeFreshCase(shipKey, result) : makeUpdatedCase(existingCase, result))
}

function makeFreshCase(shipKey: string, result: ReportCheckResult): ShipCase {
  return {
    shipKey,
    shipName: result.evidence?.shipName ?? result.facts.shipName ?? "Unknown ship",
    riskLevel: getReportLevel(result),
    reportCount: 1,
    wagesOwedTotal: result.risk.wagesOwed ?? 0,
    caseStatus: "open",
    takenBy: null,
    updatedAt: new Date().toISOString(),
  }
}

function makeUpdatedCase(existingCase: ShipCase, result: ReportCheckResult): ShipCase {
  return {
    ...existingCase,
    riskLevel: getMoreSeriousLevel(existingCase.riskLevel, getReportLevel(result)),
    reportCount: existingCase.reportCount + 1,
    wagesOwedTotal: existingCase.wagesOwedTotal + (result.risk.wagesOwed ?? 0),
    updatedAt: new Date().toISOString(),
  }
}

function getReportLevel(result: ReportCheckResult): RiskLevel {
  return result.isEmergency ? "urgent" : result.risk.level
}
