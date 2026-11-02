import { z } from "zod"

export const riskResultSchema = z.object({
  monthsUnpaid: z.number().int().min(0),
  wagesOwed: z.number().nullable(),
  score: z.number().int().min(0).max(100),
  level: z.enum(["urgent", "watch", "okay"]),
  warningSigns: z.array(z.string()),
})
