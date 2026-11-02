import { readFileSync } from "node:fs"

export function readInstruction(name: string): string {
  const location = new URL(`../instructions/${name}.md`, import.meta.url)
  return readFileSync(location, "utf8")
}
