import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { registerFindShip } from "../tools/registerFindShip.ts"
import { registerGetAbandonmentCases } from "../tools/registerGetAbandonmentCases.ts"
import { registerGetFlagHistory } from "../tools/registerGetFlagHistory.ts"
import { registerGetInspectionHistory } from "../tools/registerGetInspectionHistory.ts"

export function makeShipwatchServer(): McpServer {
  const server = new McpServer({ name: "shipwatch", version: "0.1.0" })
  registerFindShip(server)
  registerGetInspectionHistory(server)
  registerGetFlagHistory(server)
  registerGetAbandonmentCases(server)
  return server
}
