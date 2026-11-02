import { IconFrame } from "../components/IconFrame.tsx"
import type { IconProps } from "../types/IconProps.ts"

export function MicrophoneIcon({ size = 22 }: IconProps) {
  return (
    <IconFrame size={size}>
      <rect x="8" y="2" width="8" height="13" rx="4" fill="currentColor" stroke="none" />
      <path d="M5 11a7 7 0 0 0 14 0M12 18v4" />
    </IconFrame>
  )
}
