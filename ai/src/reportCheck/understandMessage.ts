import type OpenAI from "openai"
import { askForJson } from "../lib/askForJson.ts"
import { getModelForRole } from "../lib/getModelForRole.ts"
import { readInstruction } from "../lib/readInstruction.ts"
import { spokenFactsSchema } from "../schemas/spokenFactsSchema.ts"
import type { ReportCheckInput } from "../types/ReportCheckInput.ts"
import type { SpokenFacts } from "../types/SpokenFacts.ts"

export async function understandMessage(input: ReportCheckInput): Promise<SpokenFacts | null> {
  if (input.voiceWavBase64 === null && input.text === null) {
    return null
  }
  return askForJson({
    model: getModelForRole("listen"),
    messages: [
      { role: "system", content: readInstruction("understandMessage") },
      { role: "user", content: makeMessageParts(input) },
    ],
    user: input.seafarerId,
  }, spokenFactsSchema)
}

function makeMessageParts(input: ReportCheckInput): OpenAI.Chat.ChatCompletionContentPart[] {
  const parts: OpenAI.Chat.ChatCompletionContentPart[] = [
    { type: "text", text: input.text ?? "The seafarer sent a voice note." },
  ]
  if (input.voiceWavBase64 !== null) {
    parts.push({ type: "input_audio", input_audio: { data: input.voiceWavBase64, format: "wav" } })
  }
  return parts
}
