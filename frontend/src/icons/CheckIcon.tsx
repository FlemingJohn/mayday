import { IconFrame } from "../components/IconFrame.tsx"
import type { IconProps } from "../types/IconProps.ts"

export function CheckIcon({ size = 18 }: IconProps) {
  return (
    <IconFrame size={size}>
      <circle cx="12" cy="12" r="9.5" />
      <path d="M7.5 12.3l3 3 6-6.3" />
    </IconFrame>
  )
}
