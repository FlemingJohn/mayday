import { IconFrame } from "../components/IconFrame.tsx"
import type { IconProps } from "../types/IconProps.ts"

export function CameraIcon({ size = 18 }: IconProps) {
  return (
    <IconFrame size={size}>
      <path d="M3 8a2 2 0 0 1 2-2h2.5l1.6-2.2h5.8L16.5 6H19a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
      <circle cx="12" cy="13" r="3.6" />
    </IconFrame>
  )
}
