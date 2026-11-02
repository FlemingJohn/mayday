import { IconFrame } from "../components/IconFrame.tsx"
import type { IconProps } from "../types/IconProps.ts"

export function AnchorIcon({ size = 22 }: IconProps) {
  return (
    <IconFrame size={size}>
      <circle cx="12" cy="5" r="2.2" />
      <path d="M12 7.2V20M8 11h8M4.5 13.5c.5 4 3.7 6.5 7.5 6.5s7-2.5 7.5-6.5" />
    </IconFrame>
  )
}
