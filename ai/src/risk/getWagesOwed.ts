export function getWagesOwed(monthsUnpaid: number, monthlyWage: number | null): number | null {
  if (monthlyWage === null) {
    return null
  }
  return monthsUnpaid * monthlyWage
}
