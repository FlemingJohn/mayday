import { IconFrame } from "../components/IconFrame.tsx"
import type { IconProps } from "../types/IconProps.ts"

export function ShipIcon({ size = 22 }: IconProps) {
  return (
    <IconFrame size={size}>
      <path d="M8 4h5v5h4v3" />
      <path d="M2.5 13h19l-2.5 6.5h-14z" />
    </IconFrame>
  )
}
