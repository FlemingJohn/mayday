import type { Context } from "hono"
import { getDatabase } from "../lib/getDatabase.ts"
import { getPathValue } from "../lib/getPathValue.ts"
import { getShipCase } from "./getShipCase.ts"
import { takeCaseSchema } from "./takeCaseSchema.ts"

const takeOpenCase = `update ship_cases set case_status = ?, taken_by = ? where ship_key = ? and case_status = ?`

export async function handleTakeCase(context: Context): Promise<Response> {
  const shipKey = getPathValue(context, "shipKey")
  const parsed = takeCaseSchema.safeParse(await context.req.json())
  if (!parsed.success) {
    return context.json({ message: "Tell us who is taking the case" }, 400)
  }
  const change = getDatabase().prepare(takeOpenCase).run("taken", parsed.data.officerName, shipKey, "open")
  if (Number(change.changes) > 0) {
    return context.json({ isTaken: true })
  }
  return context.json({ isTaken: false, takenBy: getShipCase(shipKey)?.takenBy ?? null }, 409)
}
