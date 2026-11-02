import type { ReportCheckInput } from "../types/ReportCheckInput.ts"
import type { ReportCheckResult } from "../types/ReportCheckResult.ts"
import { makeRiskInput } from "../risk/makeRiskInput.ts"
import { explainResult } from "./explainResult.ts"
import { gatherFacts } from "./gatherFacts.ts"
import { investigateShip } from "./investigateShip.ts"
import { makeEmergencyResult } from "./makeEmergencyResult.ts"
import { scoreRisk } from "./scoreRisk.ts"

export async function runReportCheck(input: ReportCheckInput): Promise<ReportCheckResult> {
  const facts = await gatherFacts(input)
  if (facts.isSomeoneInDanger) {
    return makeEmergencyResult(input, facts)
  }
  const evidence = await investigateShip(facts, input.seafarerId)
  const scored = await scoreRisk(makeRiskInput(facts, evidence, input.reportedAt), input.seafarerId)
  const advice = await explainResult(scored.result, facts, evidence, input)
  return {
    reportId: input.reportId,
    isEmergency: false,
    facts,
    evidence,
    risk: scored.result,
    advice,
    wasScoredInSandbox: scored.wasScoredInSandbox,
  }
}
