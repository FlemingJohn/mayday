import type { ComponentChildren } from "preact"

export type StatTileProps = {
  icon: ComponentChildren
  label: string
  value?: string
  tone?: "accent" | "urgent" | "watch" | "okay"
  onPress?: () => void
}
