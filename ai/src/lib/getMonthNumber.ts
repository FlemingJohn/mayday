const monthNames = [
  "january", "february", "march", "april", "may", "june",
  "july", "august", "september", "october", "november", "december",
]

export function getMonthNumber(monthName: string): number | null {
  const index = monthNames.indexOf(monthName.trim().toLowerCase())
  return index === -1 ? null : index + 1
}
