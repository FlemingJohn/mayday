import type { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js"
import { z } from "zod"
import { makeTextResult } from "../lib/makeTextResult.ts"
import { findShipsByName } from "../ships/findShipsByName.ts"

export function registerFindShip(server: McpServer): void {
  server.registerTool(
    "findShip",
    {
      description: "Find ships by name or 7 digit IMO number. Allows small spelling mistakes. Returns IMO number, type, flag and owner.",
      inputSchema: { nameOrNumber: z.string() },
    },
    async ({ nameOrNumber }) => makeTextResult(findShipsByName(nameOrNumber)),
  )
}
