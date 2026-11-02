import { z } from "zod"

export const newReportSchema = z.object({
  reportId: z.uuid(),
  seafarerId: z.string().min(8).max(64),
  language: z.enum(["english", "hindi", "tagalog", "burmese", "ukrainian", "bahasa", "bengali", "vietnamese"]),
  reportedAt: z.iso.datetime(),
  shipName: z.string().max(80).nullable(),
  text: z.string().max(2000).nullable(),
  voiceWavBase64: z.string().max(6_000_000).nullable(),
  photoBase64: z.string().max(1_500_000).nullable(),
  photoMediaType: z.enum(["image/jpeg", "image/png", "image/webp"]).nullable(),
}).refine(
  (report) => Boolean(report.text || report.voiceWavBase64 || report.photoBase64),
  { message: "A report needs a message, a voice note or a photo" },
)
