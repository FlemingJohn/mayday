import { z } from "zod"

export const spokenFactsSchema = z.object({
  isUnderstood: z.boolean(),
  transcript: z.string(),
  shipName: z.string().nullable(),
  unpaidSinceMonthName: z.string().nullable(),
  isFoodLow: z.boolean().nullable(),
  isManagerResponding: z.boolean().nullable(),
  isContractFinished: z.boolean().nullable(),
  isSomeoneInDanger: z.boolean(),
})
