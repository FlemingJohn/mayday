import type { IncomingMessage, ServerResponse } from "node:http"
import { StreamableHTTPServerTransport } from "@modelcontextprotocol/sdk/server/streamableHttp.js"
import { makeShipwatchServer } from "./makeShipwatchServer.ts"

export async function handleMcpRequest(request: IncomingMessage, response: ServerResponse): Promise<void> {
  if (request.url === "/health") {
    response.end("ok")
    return
  }
  if (request.url !== "/mcp") {
    response.writeHead(404).end()
    return
  }
  const server = makeShipwatchServer()
  const transport = new StreamableHTTPServerTransport({ sessionIdGenerator: undefined })
  response.on("close", () => {
    void transport.close()
    void server.close()
  })
  await server.connect(transport)
  await transport.handleRequest(request, response)
}
