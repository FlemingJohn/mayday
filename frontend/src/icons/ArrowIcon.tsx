import { IconFrame } from "../components/IconFrame.tsx"
import type { IconProps } from "../types/IconProps.ts"

export function ArrowIcon({ size = 20 }: IconProps) {
  return (
    <IconFrame size={size}>
      <path d="M5 12h13M13 6.5l5.5 5.5-5.5 5.5" />
    </IconFrame>
  )
}
