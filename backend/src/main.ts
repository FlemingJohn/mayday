import { serve } from "@hono/node-server"
import { makeApp } from "./makeApp.ts"

const port = Number(process.env.PORT ?? 8080)

serve({ fetch: makeApp().fetch, port }, () => {
  console.log(`Mayday backend is listening on http://localhost:${port}`)
})
