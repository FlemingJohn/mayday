import { z } from "zod"

export const evidenceSchema = z.object({
  isShipFound: z.boolean(),
  imoNumber: z.string().nullable(),
  shipName: z.string().nullable(),
  ownerName: z.string().nullable(),
  detentionCount: z.number().int().min(0),
  hasRecentFlagChange: z.boolean(),
  ownerPastCaseCount: z.number().int().min(0),
  newsFindings: z.array(z.string()),
  sources: z.array(z.string()),
})
