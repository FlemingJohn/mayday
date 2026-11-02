import type { Language } from "./Language.ts"

export type ReportCheckInput = {
  reportId: string
  seafarerId: string
  language: Language
  reportedAt: string
  shipName: string | null
  text: string | null
  voiceWavBase64: string | null
  photoBase64: string | null
  photoMediaType: string | null
}
