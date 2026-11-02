type ToolContent = { type: string; text?: string }

export function getToolResultValue(result: unknown): unknown {
  const content = (result as { content?: ToolContent[] }).content ?? []
  const text = content.find((part) => part.type === "text")?.text
  return text === undefined ? null : JSON.parse(text)
}
