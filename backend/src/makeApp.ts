import { Hono } from "hono"
import { cors } from "hono/cors"
import { handleCaseList } from "./cases/handleCaseList.ts"
import { handleSolveCase } from "./cases/handleSolveCase.ts"
import { handleTakeCase } from "./cases/handleTakeCase.ts"
import { handleNewReport } from "./reports/handleNewReport.ts"
import { handleReportStatus } from "./reports/handleReportStatus.ts"
import { handleShipSearch } from "./ships/handleShipSearch.ts"

export function makeApp(): Hono {
  const app = new Hono()
  app.use("/api/*", cors())
  app.get("/api/health", (context) => context.text("ok"))
  app.post("/api/reports", handleNewReport)
  app.get("/api/reports/:reportId", handleReportStatus)
  app.get("/api/ships", handleShipSearch)
  app.get("/api/cases", handleCaseList)
  app.post("/api/cases/:shipKey/take", handleTakeCase)
  app.post("/api/cases/:shipKey/solve", handleSolveCase)
  return app
}
