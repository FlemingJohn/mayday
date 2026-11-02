import type { ModelRole } from "../types/ModelRole.ts"
import { getEnvironmentValue } from "./getEnvironmentValue.ts"

const defaultModels: Record<ModelRole, string> = {
  listen: "xiaomi/mimo-v2.6-flash",
  read: "meta/llama-4-scout-17b",
  investigate: "deepseek/deepseek-v4-flash",
  score: "deepseek/deepseek-v4-flash",
  explain: "google/gemma-3-27b-it",
}

export function getModelForRole(role: ModelRole): string {
  return getEnvironmentValue(`OTARI_MODEL_${role.toUpperCase()}`, defaultModels[role])
}
