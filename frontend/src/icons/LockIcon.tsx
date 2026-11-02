import { IconFrame } from "../components/IconFrame.tsx"
import type { IconProps } from "../types/IconProps.ts"

export function LockIcon({ size = 16 }: IconProps) {
  return (
    <IconFrame size={size}>
      <rect x="4.5" y="10.5" width="15" height="10" rx="3" />
      <path d="M8 10.5V8a4 4 0 0 1 8 0v2.5" />
    </IconFrame>
  )
}
