export function normalizeShipName(name: string): string {
  return name
    .toUpperCase()
    .replace(/^(MV|M\/V|MT|M\/T|SS)\s+/, "")
    .replace(/[^A-Z0-9]/g, "")
}
