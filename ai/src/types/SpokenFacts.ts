import type { z } from "zod"
import type { spokenFactsSchema } from "../schemas/spokenFactsSchema.ts"

export type SpokenFacts = z.infer<typeof spokenFactsSchema>
