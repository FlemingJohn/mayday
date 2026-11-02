import type { z } from "zod"
import type { evidenceSchema } from "../schemas/evidenceSchema.ts"

export type Evidence = z.infer<typeof evidenceSchema>
