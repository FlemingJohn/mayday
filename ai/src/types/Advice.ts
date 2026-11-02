import type { z } from "zod"
import type { adviceSchema } from "../schemas/adviceSchema.ts"

export type Advice = z.infer<typeof adviceSchema>
