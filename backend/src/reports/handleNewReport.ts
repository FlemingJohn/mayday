import type { Context } from "hono"
import { newReportSchema } from "./newReportSchema.ts"
import { saveReport } from "./saveReport.ts"
import { startReportCheck } from "./startReportCheck.ts"

export async function handleNewReport(context: Context): Promise<Response> {
  const parsed = newReportSchema.safeParse(await context.req.json())
  if (!parsed.success) {
    return context.json({ message: "The report is missing something", issues: parsed.error.issues }, 400)
  }
  const isNewReport = saveReport(parsed.data)
  if (isNewReport) {
    startReportCheck(parsed.data)
  }
  return context.json({ reportId: parsed.data.reportId, status: "checking" }, 202)
}
