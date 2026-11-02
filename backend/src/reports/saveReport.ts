import { getDatabase } from "../lib/getDatabase.ts"
import type { NewReport } from "../types/NewReport.ts"

const insertReport = `
  insert or ignore into reports (id, seafarer_id, ship_name, language, reported_at, received_at, status)
  values (?, ?, ?, ?, ?, ?, ?)`

export function saveReport(report: NewReport): boolean {
  const change = getDatabase().prepare(insertReport).run(
    report.reportId,
    report.seafarerId,
    report.shipName,
    report.language,
    report.reportedAt,
    new Date().toISOString(),
    "checking",
  )
  return Number(change.changes) > 0
}
