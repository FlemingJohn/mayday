export function getJsonFromText(text: string): unknown {
  const start = text.indexOf("{")
  const end = text.lastIndexOf("}")
  if (start === -1 || end <= start) {
    throw new Error("The model did not return a JSON object")
  }
  return JSON.parse(text.slice(start, end + 1))
}
