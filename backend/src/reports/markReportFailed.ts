import { getDatabase } from "../lib/getDatabase.ts"

const updateReport = `update reports set status = ?, failure = ? where id = ?`

export function markReportFailed(reportId: string, error: unknown): void {
  const failure = error instanceof Error ? error.message : String(error)
  getDatabase().prepare(updateReport).run("failed", failure, reportId)
  console.error(`Report ${reportId} could not be checked: ${failure}`)
}
