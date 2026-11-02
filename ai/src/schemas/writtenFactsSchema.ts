import { z } from "zod"

export const writtenFactsSchema = z.object({
  isReadable: z.boolean(),
  documentKind: z.enum(["pay slip", "contract", "ship name", "other"]),
  shipName: z.string().nullable(),
  imoNumber: z.string().nullable(),
  payMonth: z.string().nullable(),
  monthlyWage: z.number().nullable(),
  amountPaid: z.number().nullable(),
  currency: z.string().nullable(),
})
