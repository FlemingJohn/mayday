import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"
import { makeTextResult } from "../lib/makeTextResult.ts"
import { getAbandonmentCases } from "../ships/getAbandonmentCases.ts"

export function registerGetAbandonmentCases(server: McpServer): void {
  server.registerTool(
    "getAbandonmentCases",
    {
      description: "Past reported crew abandonment cases for a ship or for any ship of the same owner.",
      inputSchema: { imoNumber: z.string(), ownerName: z.string() },
    },
    async ({ imoNumber, ownerName }) => makeTextResult(getAbandonmentCases(imoNumber, ownerName)),
  )
}
