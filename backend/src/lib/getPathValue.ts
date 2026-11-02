import type { Context } from "hono"

export function getPathValue(context: Context, name: string): string {
  return context.req.param(name) ?? ""
}
