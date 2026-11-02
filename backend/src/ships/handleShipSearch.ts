import type { Context } from "hono"
import { callShipwatchTool } from "../lib/callShipwatchTool.ts"

export async function handleShipSearch(context: Context): Promise<Response> {
  const search = context.req.query("search") ?? ""
  if (search.trim().length < 2) {
    return context.json({ ships: [], isShipwatchAvailable: true })
  }
  try {
    const ships = await callShipwatchTool("findShip", { nameOrNumber: search })
    return context.json({ ships, isShipwatchAvailable: true })
  } catch {
    return context.json({ ships: [], isShipwatchAvailable: false })
  }
}
