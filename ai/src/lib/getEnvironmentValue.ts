export function getEnvironmentValue(name: string, fallback?: string): string {
  const value = process.env[name] || fallback
  if (value === undefined) {
    throw new Error(`Missing environment value: ${name}`)
  }
  return value
}
