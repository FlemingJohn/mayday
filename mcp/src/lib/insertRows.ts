import type { DatabaseSync, SQLInputValue } from "node:sqlite"

export function insertRows(database: DatabaseSync, statement: string, rows: SQLInputValue[][]): void {
  const insert = database.prepare(statement)
  for (const row of rows) {
    insert.run(...row)
  }
}
