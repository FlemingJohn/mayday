import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"
import { makeTextResult } from "../lib/makeTextResult.ts"
import { getFlagHistory } from "../ships/getFlagHistory.ts"

export function registerGetFlagHistory(server: McpServer): void {
  server.registerTool(
    "getFlagHistory",
    {
      description: "Changes to the country a ship is registered in, newest first.",
      inputSchema: { imoNumber: z.string() },
    },
    async ({ imoNumber }) => makeTextResult(getFlagHistory(imoNumber)),
  )
}
