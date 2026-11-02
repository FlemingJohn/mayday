import type { ReportCheckResult } from "@mayday/ai/types/ReportCheckResult.ts"
import { updateShipCase } from "../cases/updateShipCase.ts"
import { getDatabase } from "../lib/getDatabase.ts"

const updateReport = `update reports set status = ?, result_json = ? where id = ?`

export function saveReportResult(result: ReportCheckResult): void {
  getDatabase().prepare(updateReport).run("done", JSON.stringify(result), result.reportId)
  updateShipCase(result)
}
