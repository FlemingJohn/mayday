import type OpenAI from "openai"
import type { McpServerReference } from "./McpServerReference.ts"
import type { OtariTool } from "./OtariTool.ts"

export type OtariRequest = {
  model: string
  messages: OpenAI.Chat.ChatCompletionMessageParam[]
  tools?: OtariTool[]
  mcp_servers?: McpServerReference[]
  max_tool_iterations?: number
  user?: string
}
