import type { ComponentChildren } from "preact"

export type PillButtonProps = {
  label: string
  icon?: ComponentChildren
  variant?: "main" | "plain" | "dark"
  onPress?: () => void
}
