import { IconFrame } from "../components/IconFrame.tsx"
import type { IconProps } from "../types/IconProps.ts"

export function KeyboardIcon({ size = 18 }: IconProps) {
  return (
    <IconFrame size={size}>
      <rect x="2.5" y="6" width="19" height="12" rx="3" />
      <path d="M6 10h1M10 10h1M14 10h1M8 14h8" />
    </IconFrame>
  )
}
