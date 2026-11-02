export function getMonthsUnpaid(unpaidSinceMonth: string | null, reportedAt: string): number {
  if (unpaidSinceMonth === null) {
    return 0
  }
  const unpaidYear = Number(unpaidSinceMonth.slice(0, 4))
  const unpaidMonth = Number(unpaidSinceMonth.slice(5, 7))
  const reportedYear = Number(reportedAt.slice(0, 4))
  const reportedMonth = Number(reportedAt.slice(5, 7))
  const months = (reportedYear - unpaidYear) * 12 + (reportedMonth - unpaidMonth)
  return Math.max(0, months)
}
