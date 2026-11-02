import { askForJson } from "../lib/askForJson.ts"
import { getModelForRole } from "../lib/getModelForRole.ts"
import { getShipwatchServer } from "../lib/getShipwatchServer.ts"
import { readInstruction } from "../lib/readInstruction.ts"
import { evidenceSchema } from "../schemas/evidenceSchema.ts"
import type { CombinedFacts } from "../types/CombinedFacts.ts"
import type { Evidence } from "../types/Evidence.ts"

export async function investigateShip(facts: CombinedFacts, seafarerId: string): Promise<Evidence | null> {
  const shipwatchServer = getShipwatchServer()
  if (shipwatchServer === null || (facts.shipName === null && facts.imoNumber === null)) {
    return null
  }
  try {
    return await askForJson({
      model: getModelForRole("investigate"),
      messages: [
        { role: "system", content: readInstruction("investigateShip") },
        { role: "user", content: JSON.stringify({ shipName: facts.shipName, imoNumber: facts.imoNumber }) },
      ],
      tools: [{ type: "otari_web_search", max_uses: 3 }],
      mcp_servers: [shipwatchServer],
      max_tool_iterations: 8,
      user: seafarerId,
    }, evidenceSchema)
  } catch {
    return null
  }
}
