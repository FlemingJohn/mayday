import type { McpServerReference } from "../types/McpServerReference.ts"

export function getShipwatchServer(): McpServerReference | null {
  const url = process.env.SHIPWATCH_PUBLIC_URL
  if (!url) {
    return null
  }
  return {
    name: "shipwatch",
    url,
    purpose_hint: "Use for ship records: port detentions, flag changes and past crew abandonments.",
    allowed_tools: ["findShip", "getInspectionHistory", "getFlagHistory", "getAbandonmentCases"],
  }
}
