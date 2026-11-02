import type { RoundIconButtonProps } from "../types/RoundIconButtonProps.ts"

export function RoundIconButton({ label, icon, isFilled = false, onPress }: RoundIconButtonProps) {
  const filledClass = isFilled ? " round-icon-button-filled" : ""
  return (
    <button type="button" class={`round-icon-button${filledClass}`} aria-label={label} onClick={onPress}>
      {icon}
    </button>
  )
}
