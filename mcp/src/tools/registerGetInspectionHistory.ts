import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"
import { makeTextResult } from "../lib/makeTextResult.ts"
import { getInspectionHistory } from "../ships/getInspectionHistory.ts"

export function registerGetInspectionHistory(server: McpServer): void {
  server.registerTool(
    "getInspectionHistory",
    {
      description: "Port state control inspections of a ship, newest first. isDetained is true when port inspectors stopped the ship.",
      inputSchema: { imoNumber: z.string() },
    },
    async ({ imoNumber }) => makeTextResult(getInspectionHistory(imoNumber)),
  )
}
