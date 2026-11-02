import type { Context } from "hono"
import { getPathValue } from "../lib/getPathValue.ts"
import { getReportStatus } from "./getReportStatus.ts"

export function handleReportStatus(context: Context): Response {
  const reportStatus = getReportStatus(getPathValue(context, "reportId"))
  if (reportStatus === null) {
    return context.json({ message: "No report with this id" }, 404)
  }
  return context.json(reportStatus)
}
