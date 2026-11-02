import { z } from "zod"

export const adviceSchema = z.object({
  headline: z.string(),
  reasons: z.array(z.string()),
  steps: z.array(z.string()),
})
