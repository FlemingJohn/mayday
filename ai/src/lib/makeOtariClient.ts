import OpenAI from "openai"
import { getEnvironmentValue } from "./getEnvironmentValue.ts"

export function makeOtariClient(): OpenAI {
  return new OpenAI({
    baseURL: getEnvironmentValue("OTARI_BASE_URL", "https://api.otari.ai/api/v1"),
    apiKey: getEnvironmentValue("OTARI_API_KEY"),
    maxRetries: 1,
    timeout: 120_000,
  })
}
