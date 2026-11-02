import { readFileSync } from "node:fs"
import type { DatabaseSync } from "node:sqlite"

const schema = readFileSync(new URL("./schema.sql", import.meta.url), "utf8")

export function makeTables(database: DatabaseSync): void {
  database.exec(schema)
}
