import { IconFrame } from "../components/IconFrame.tsx"
import type { IconProps } from "../types/IconProps.ts"

export function SoundIcon({ size = 20 }: IconProps) {
  return (
    <IconFrame size={size}>
      <path d="M3.5 9.5h3.5l5-4v13l-5-4H3.5z" />
      <path d="M15.5 9a4.5 4.5 0 0 1 0 6M18 6.5a8 8 0 0 1 0 11" />
    </IconFrame>
  )
}
