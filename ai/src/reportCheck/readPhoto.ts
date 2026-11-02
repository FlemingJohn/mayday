import { askForJson } from "../lib/askForJson.ts"
import { getModelForRole } from "../lib/getModelForRole.ts"
import { readInstruction } from "../lib/readInstruction.ts"
import { writtenFactsSchema } from "../schemas/writtenFactsSchema.ts"
import type { ReportCheckInput } from "../types/ReportCheckInput.ts"
import type { WrittenFacts } from "../types/WrittenFacts.ts"

export async function readPhoto(input: ReportCheckInput): Promise<WrittenFacts | null> {
  if (input.photoBase64 === null) {
    return null
  }
  const photoUrl = `data:${input.photoMediaType ?? "image/jpeg"};base64,${input.photoBase64}`
  return askForJson({
    model: getModelForRole("read"),
    messages: [
      { role: "system", content: readInstruction("readPhoto") },
      { role: "user", content: [{ type: "image_url", image_url: { url: photoUrl } }] },
    ],
    user: input.seafarerId,
  }, writtenFactsSchema)
}
