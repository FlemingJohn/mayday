import { getMonthNumber } from "../lib/getMonthNumber.ts"
import type { SpokenFacts } from "../types/SpokenFacts.ts"
import type { WrittenFacts } from "../types/WrittenFacts.ts"

const yearAndMonth = /^\d{4}-\d{2}$/

export function getUnpaidSinceMonth(
  spokenFacts: SpokenFacts | null,
  writtenFacts: WrittenFacts | null,
  reportedAt: string,
): string | null {
  const payMonth = writtenFacts?.payMonth ?? ""
  if (writtenFacts?.amountPaid === 0 && yearAndMonth.test(payMonth)) {
    return payMonth
  }
  const monthName = spokenFacts?.unpaidSinceMonthName
  return monthName ? getLatestPastMonth(monthName, reportedAt) : null
}

function getLatestPastMonth(monthName: string, reportedAt: string): string | null {
  const month = getMonthNumber(monthName)
  if (month === null) {
    return null
  }
  const reportedYear = Number(reportedAt.slice(0, 4))
  const reportedMonth = Number(reportedAt.slice(5, 7))
  const year = month > reportedMonth ? reportedYear - 1 : reportedYear
  return `${year}-${String(month).padStart(2, "0")}`
}
