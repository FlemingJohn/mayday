import { randomUUID } from "node:crypto"
import { runReportCheck } from "../reportCheck/runReportCheck.ts"
import type { ReportCheckInput } from "../types/ReportCheckInput.ts"

const sampleReport: ReportCheckInput = {
  reportId: randomUUID(),
  seafarerId: "trial-seafarer",
  language: "hindi",
  reportedAt: new Date().toISOString(),
  shipName: "Ocean Pearl",
  text: "We have not been paid since August. Food is running low and the manager does not answer.",
  voiceWavBase64: null,
  photoBase64: null,
  photoMediaType: null,
}

const result = await runReportCheck(sampleReport)
console.log(JSON.stringify(result, null, 2))
