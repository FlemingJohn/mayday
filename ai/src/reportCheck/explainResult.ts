import { askForJson } from "../lib/askForJson.ts"
import { getModelForRole } from "../lib/getModelForRole.ts"
import { readInstruction } from "../lib/readInstruction.ts"
import { adviceSchema } from "../schemas/adviceSchema.ts"
import type { Advice } from "../types/Advice.ts"
import type { CombinedFacts } from "../types/CombinedFacts.ts"
import type { Evidence } from "../types/Evidence.ts"
import type { ReportCheckInput } from "../types/ReportCheckInput.ts"
import type { RiskResult } from "../types/RiskResult.ts"

export async function explainResult(
  risk: RiskResult,
  facts: CombinedFacts,
  evidence: Evidence | null,
  input: ReportCheckInput,
): Promise<Advice> {
  const situation = {
    language: input.language,
    level: risk.level,
    monthsUnpaid: risk.monthsUnpaid,
    wagesOwed: risk.wagesOwed,
    currency: facts.currency,
    warningSigns: risk.warningSigns,
    isShipRecordAvailable: evidence !== null,
  }
  return askForJson({
    model: getModelForRole("explain"),
    messages: [
      { role: "system", content: readInstruction("explainResult") },
      { role: "user", content: JSON.stringify(situation) },
    ],
    user: input.seafarerId,
  }, adviceSchema)
}
