import { getRiskResult } from "../risk/getRiskResult.ts"
import { makeRiskInput } from "../risk/makeRiskInput.ts"
import type { CombinedFacts } from "../types/CombinedFacts.ts"
import type { ReportCheckInput } from "../types/ReportCheckInput.ts"
import type { ReportCheckResult } from "../types/ReportCheckResult.ts"

export function makeEmergencyResult(input: ReportCheckInput, facts: CombinedFacts): ReportCheckResult {
  return {
    reportId: input.reportId,
    isEmergency: true,
    facts,
    evidence: null,
    risk: getRiskResult(makeRiskInput(facts, null, input.reportedAt)),
    advice: {
      headline: "Someone may be in danger. Get help now.",
      reasons: [],
      steps: [
        "Tell the master or the officer on watch now.",
        "Call the coast guard rescue centre on the ship's radio or phone.",
        "Message ITF on WhatsApp: +44 7523 515097",
      ],
    },
    wasScoredInSandbox: false,
  }
}
