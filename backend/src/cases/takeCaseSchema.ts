import { z } from "zod"

export const takeCaseSchema = z.object({
  officerName: z.string().min(1).max(60),
})
