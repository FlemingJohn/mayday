import { runReportCheck } from "@mayday/ai/runReportCheck"
import type { NewReport } from "../types/NewReport.ts"
import { markReportFailed } from "./markReportFailed.ts"
import { saveReportResult } from "./saveReportResult.ts"

export function startReportCheck(report: NewReport): void {
  runReportCheck(report)
    .then(saveReportResult)
    .catch((error: unknown) => markReportFailed(report.reportId, error))
}
