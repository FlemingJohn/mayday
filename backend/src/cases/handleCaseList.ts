import type { Context } from "hono"
import { getCaseList } from "./getCaseList.ts"

export function handleCaseList(context: Context): Response {
  return context.json({ cases: getCaseList() })
}
