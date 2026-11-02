import type { ComponentChildren } from "preact"

export type RoundIconButtonProps = {
  label: string
  icon: ComponentChildren
  isFilled?: boolean
  onPress?: () => void
}
