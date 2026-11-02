import assert from "node:assert/strict"
import { test } from "node:test"
import type { RiskInput } from "../types/RiskInput.ts"
import { getRiskResult } from "./getRiskResult.ts"

const calmShip: RiskInput = {
  unpaidSinceMonth: null,
  reportedAt: "2026-11-02T10:00:00Z",
  monthlyWage: 1500,
  isFoodLow: false,
  isManagerSilent: false,
  isContractFinished: false,
  detentionCount: 0,
  hasRecentFlagChange: false,
  ownerPastCaseCount: 0,
}

test("a ship with no warning signs is okay", () => {
  const result = getRiskResult(calmShip)
  assert.equal(result.score, 0)
  assert.equal(result.level, "okay")
})

test("one late month is not yet a warning sign", () => {
  const result = getRiskResult({ ...calmShip, unpaidSinceMonth: "2026-10" })
  assert.equal(result.monthsUnpaid, 1)
  assert.deepEqual(result.warningSigns, [])
})

test("two late months and a silent manager is worth watching", () => {
  const result = getRiskResult({ ...calmShip, unpaidSinceMonth: "2026-09", isManagerSilent: true })
  assert.equal(result.score, 40)
  assert.equal(result.level, "watch")
})

test("the Ocean Pearl case is urgent and capped at 100", () => {
  const result = getRiskResult({
    ...calmShip,
    unpaidSinceMonth: "2026-08",
    isFoodLow: true,
    isManagerSilent: true,
    detentionCount: 2,
    hasRecentFlagChange: true,
    ownerPastCaseCount: 1,
  })
  assert.equal(result.monthsUnpaid, 3)
  assert.equal(result.wagesOwed, 4500)
  assert.equal(result.score, 100)
  assert.equal(result.level, "urgent")
})

test("months are counted across the new year", () => {
  const result = getRiskResult({ ...calmShip, unpaidSinceMonth: "2026-11", reportedAt: "2027-01-15T08:00:00Z" })
  assert.equal(result.monthsUnpaid, 2)
})

test("an unknown wage leaves wages owed empty", () => {
  const result = getRiskResult({ ...calmShip, unpaidSinceMonth: "2026-08", monthlyWage: null })
  assert.equal(result.wagesOwed, null)
})
