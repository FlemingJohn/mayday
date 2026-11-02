import { getDatabase } from "../lib/getDatabase.ts"
import type { ReportStatus } from "../types/ReportStatus.ts"
import type { ReportStatusView } from "../types/ReportStatusView.ts"

const selectReport = `select status, result_json as resultJson from reports where id = ?`

export function getReportStatus(reportId: string): ReportStatusView | null {
  const row = getDatabase().prepare(selectReport).get(reportId) as
    { status: ReportStatus; resultJson: string | null } | undefined
  if (row === undefined) {
    return null
  }
  return {
    reportId,
    status: row.status,
    result: row.resultJson === null ? null : JSON.parse(row.resultJson),
  }
}
