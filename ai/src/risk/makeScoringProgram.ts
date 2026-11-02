import { readFileSync } from "node:fs"
import type { RiskInput } from "../types/RiskInput.ts"

const scoringSource = readFileSync(new URL("./riskScore.py", import.meta.url), "utf8")

export function makeScoringProgram(input: RiskInput): string {
  const inputLine = `RISK_INPUT = json.loads(${JSON.stringify(JSON.stringify(input))})`
  return `import json\n${inputLine}\n${scoringSource}`
}
