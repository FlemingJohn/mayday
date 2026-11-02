import type { z } from "zod"
import type { writtenFactsSchema } from "../schemas/writtenFactsSchema.ts"

export type WrittenFacts = z.infer<typeof writtenFactsSchema>
