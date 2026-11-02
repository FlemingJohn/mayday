import type { PillButtonProps } from "../types/PillButtonProps.ts"

export function PillButton({ label, icon, variant = "plain", onPress }: PillButtonProps) {
  return (
    <button type="button" class={`pill-button pill-button-${variant}`} onClick={onPress}>
      {icon}
      <span>{label}</span>
    </button>
  )
}
