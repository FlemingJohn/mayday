import type { ReportCheckResult } from "@mayday/ai/types/ReportCheckResult.ts"
import type { ReportStatus } from "./ReportStatus.ts"

export type ReportStatusView = {
  reportId: string
  status: ReportStatus
  result: ReportCheckResult | null
}
