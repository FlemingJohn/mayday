import { DatabaseSync } from "node:sqlite"
import { fileURLToPath } from "node:url"
import { makeShipTables } from "../database/makeShipTables.ts"

let shipDatabase: DatabaseSync | undefined

export function getShipDatabase(): DatabaseSync {
  if (shipDatabase === undefined) {
    shipDatabase = new DatabaseSync(fileURLToPath(new URL("../../data/ships.db", import.meta.url)))
    makeShipTables(shipDatabase)
  }
  return shipDatabase
}
