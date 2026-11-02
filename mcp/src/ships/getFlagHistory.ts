import { getShipDatabase } from "../lib/getShipDatabase.ts"
import type { FlagChange } from "../types/FlagChange.ts"

const selectFlagChanges = `
  select imo_number as imoNumber, changed_on as changedOn, from_flag as fromFlag, to_flag as toFlag
  from flag_changes
  where imo_number = ?
  order by changed_on desc`

export function getFlagHistory(imoNumber: string): FlagChange[] {
  return getShipDatabase().prepare(selectFlagChanges).all(imoNumber) as unknown as FlagChange[]
}
