import { DatabaseSync } from "node:sqlite"
import { fileURLToPath } from "node:url"
import { makeTables } from "../database/makeTables.ts"

let database: DatabaseSync | undefined

export function getDatabase(): DatabaseSync {
  if (database === undefined) {
    database = new DatabaseSync(fileURLToPath(new URL("../../data/mayday.db", import.meta.url)))
    makeTables(database)
  }
  return database
}
