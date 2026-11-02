import { Client } from "@modelcontextprotocol/sdk/client/index.js"
import { StreamableHTTPClientTransport } from "@modelcontextprotocol/sdk/client/streamableHttp.js"
import { getEnvironmentValue } from "./getEnvironmentValue.ts"
import { getToolResultValue } from "./getToolResultValue.ts"

export async function callShipwatchTool(toolName: string, toolArguments: Record<string, unknown>): Promise<unknown> {
  const shipwatchUrl = new URL(getEnvironmentValue("SHIPWATCH_URL", "http://localhost:8787/mcp"))
  const client = new Client({ name: "mayday-backend", version: "0.1.0" })
  await client.connect(new StreamableHTTPClientTransport(shipwatchUrl))
  try {
    return getToolResultValue(await client.callTool({ name: toolName, arguments: toolArguments }))
  } finally {
    await client.close()
  }
}
