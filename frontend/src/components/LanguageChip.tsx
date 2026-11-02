import type { LanguageChipProps } from "../types/LanguageChipProps.ts"

export function LanguageChip({ label, isSelected, onPress }: LanguageChipProps) {
  const selectedClass = isSelected ? " language-chip-selected" : ""
  return (
    <button type="button" class={`language-chip${selectedClass}`} aria-pressed={isSelected} onClick={onPress}>
      {label}
    </button>
  )
}
