import { createServer } from "node:http"
import { handleMcpRequest } from "./server/handleMcpRequest.ts"

const port = Number(process.env.PORT ?? 8787)

createServer(handleMcpRequest).listen(port, () => {
  console.log(`Shipwatch is listening on http://localhost:${port}/mcp`)
})
