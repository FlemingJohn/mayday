import type { CombinedFacts } from "../types/CombinedFacts.ts"
import type { ReportCheckInput } from "../types/ReportCheckInput.ts"
import { combineFacts } from "./combineFacts.ts"
import { readPhoto } from "./readPhoto.ts"
import { understandMessage } from "./understandMessage.ts"

export async function gatherFacts(input: ReportCheckInput): Promise<CombinedFacts> {
  const [spokenFacts, writtenFacts] = await Promise.all([
    understandMessage(input),
    readPhoto(input),
  ])
  return combineFacts(input, spokenFacts, writtenFacts)
}
