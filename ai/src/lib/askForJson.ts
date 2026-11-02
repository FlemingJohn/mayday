import type OpenAI from "openai"
import type { ZodType } from "zod"
import type { OtariRequest } from "../types/OtariRequest.ts"
import { getJsonFromText } from "./getJsonFromText.ts"
import { getOtariClient } from "./getOtariClient.ts"

export async function askForJson<Result>(request: OtariRequest, schema: ZodType<Result>): Promise<Result> {
  try {
    return await sendAndCheck(request, schema)
  } catch {
    return await sendAndCheck(addStricterReminder(request), schema)
  }
}

async function sendAndCheck<Result>(request: OtariRequest, schema: ZodType<Result>): Promise<Result> {
  const body = request as OpenAI.Chat.ChatCompletionCreateParamsNonStreaming
  const response = await getOtariClient().chat.completions.create(body)
  const text = response.choices[0]?.message.content ?? ""
  return schema.parse(getJsonFromText(text))
}

function addStricterReminder(request: OtariRequest): OtariRequest {
  const reminder = { role: "user" as const, content: "Reply with only the JSON object. No other text." }
  return { ...request, messages: [...request.messages, reminder] }
}
