import { getShipDatabase } from "../lib/getShipDatabase.ts"
import { insertRows } from "../lib/insertRows.ts"
import { demoAbandonmentCases } from "./demoAbandonmentCases.ts"
import { demoFlagChanges } from "./demoFlagChanges.ts"
import { demoInspections } from "./demoInspections.ts"
import { demoShips } from "./demoShips.ts"

const database = getShipDatabase()
database.exec("delete from ships; delete from inspections; delete from flag_changes; delete from abandonment_cases;")

insertRows(database, "insert into ships values (?, ?, ?, ?, ?)", demoShips.map((ship) =>
  [ship.imoNumber, ship.name, ship.shipType, ship.flag, ship.ownerName]))

insertRows(database, "insert into inspections values (?, ?, ?, ?, ?)", demoInspections.map((inspection) =>
  [inspection.imoNumber, inspection.inspectedOn, inspection.port, inspection.authority, inspection.isDetained ? 1 : 0]))

insertRows(database, "insert into flag_changes values (?, ?, ?, ?)", demoFlagChanges.map((change) =>
  [change.imoNumber, change.changedOn, change.fromFlag, change.toFlag]))

insertRows(database, "insert into abandonment_cases values (?, ?, ?, ?, ?, ?)", demoAbandonmentCases.map((item) =>
  [item.imoNumber, item.shipName, item.ownerName, item.reportedOn, item.status, item.crewCount]))

console.log(`Shipwatch demo data is ready: ${demoShips.length} ships`)
