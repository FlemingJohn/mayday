import type { z } from "zod"
import type { newReportSchema } from "../reports/newReportSchema.ts"

export type NewReport = z.infer<typeof newReportSchema>
