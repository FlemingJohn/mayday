import type { Context } from "hono"
import { getDatabase } from "../lib/getDatabase.ts"
import { getPathValue } from "../lib/getPathValue.ts"

const solveCase = `update ship_cases set case_status = ? where ship_key = ?`

export function handleSolveCase(context: Context): Response {
  const change = getDatabase().prepare(solveCase).run("solved", getPathValue(context, "shipKey"))
  if (Number(change.changes) === 0) {
    return context.json({ message: "No case for this ship" }, 404)
  }
  return context.json({ isSolved: true })
}
