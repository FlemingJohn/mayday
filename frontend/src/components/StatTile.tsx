import type { StatTileProps } from "../types/StatTileProps.ts"

export function StatTile({ icon, label, value, tone = "accent", onPress }: StatTileProps) {
  return (
    <button type="button" class={`stat-tile stat-tile-${tone}`} onClick={onPress} disabled={onPress === undefined}>
      <span class="stat-tile-icon">{icon}</span>
      {value !== undefined && <span class="stat-tile-value">{value}</span>}
      <span class="stat-tile-label">{label}</span>
    </button>
  )
}
