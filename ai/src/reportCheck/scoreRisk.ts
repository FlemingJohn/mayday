import { askForJson } from "../lib/askForJson.ts"
import { getModelForRole } from "../lib/getModelForRole.ts"
import { readInstruction } from "../lib/readInstruction.ts"
import { getRiskResult } from "../risk/getRiskResult.ts"
import { isSameRiskResult } from "../risk/isSameRiskResult.ts"
import { makeScoringProgram } from "../risk/makeScoringProgram.ts"
import { riskResultSchema } from "../schemas/riskResultSchema.ts"
import type { RiskInput } from "../types/RiskInput.ts"
import type { ScoredRisk } from "../types/ScoredRisk.ts"

export async function scoreRisk(input: RiskInput, seafarerId: string): Promise<ScoredRisk> {
  const localResult = getRiskResult(input)
  try {
    const sandboxResult = await askForJson({
      model: getModelForRole("score"),
      messages: [
        { role: "system", content: readInstruction("scoreRisk") },
        { role: "user", content: makeScoringProgram(input) },
      ],
      tools: [{ type: "otari_code_execution" }],
      max_tool_iterations: 3,
      user: seafarerId,
    }, riskResultSchema)
    const isTrusted = isSameRiskResult(sandboxResult, localResult)
    return { result: isTrusted ? sandboxResult : localResult, wasScoredInSandbox: isTrusted }
  } catch {
    return { result: localResult, wasScoredInSandbox: false }
  }
}
