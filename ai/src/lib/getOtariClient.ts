import type OpenAI from "openai"
import { makeOtariClient } from "./makeOtariClient.ts"

let otariClient: OpenAI | undefined

export function getOtariClient(): OpenAI {
  otariClient ??= makeOtariClient()
  return otariClient
}
