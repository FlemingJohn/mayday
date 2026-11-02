import type { z } from "zod"
import type { riskResultSchema } from "../schemas/riskResultSchema.ts"

export type RiskResult = z.infer<typeof riskResultSchema>
