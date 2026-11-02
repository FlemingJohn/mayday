const containerRows = [
  { y: 60, startX: 62, colors: ["accent", "navy", "watch", "accent"] },
  { y: 80, startX: 48, colors: ["navy", "accent", "grey", "navy", "watch"] },
]

const containerColors: Record<string, string> = {
  accent: "var(--color-accent)",
  navy: "var(--color-container-navy)",
  grey: "var(--color-container-grey)",
  watch: "var(--color-watch)",
}

export function CargoShipIllustration() {
  return (
    <svg viewBox="0 0 268 170" width="100%" role="img" aria-label="A cargo ship at sea">
      <circle cx="206" cy="46" r="26" style={{ fill: "var(--color-accent-soft)" }} />
      <path d="M0 132c22-6 44-6 67 0s45 6 67 0 45-6 67 0 45 6 67 0v38H0z" style={{ fill: "var(--color-sea)" }} />
      {containerRows.map((row) => row.colors.map((color, index) => (
        <rect key={`${row.y}-${index}`} x={row.startX + index * 28} y={row.y} width="26" height="18" rx="2" style={{ fill: containerColors[color] }} />
      )))}
      <rect x="194" y="54" width="28" height="44" rx="3" style={{ fill: "var(--color-card)", stroke: "var(--color-ink)", strokeWidth: 2 }} />
      <rect x="199" y="60" width="18" height="6" rx="1.5" style={{ fill: "var(--color-ink)" }} />
      <rect x="205" y="40" width="6" height="14" style={{ fill: "var(--color-ink)" }} />
      <path d="M30 100h214l-18 32H52z" style={{ fill: "var(--color-ink)" }} />
      <path d="M40 108h196" style={{ stroke: "var(--color-accent)", strokeWidth: 3 }} />
      <path d="M0 140c22-6 44-6 67 0s45 6 67 0 45-6 67 0 45 6 67 0" style={{ fill: "none", stroke: "var(--color-sea-line)", strokeWidth: 2 }} />
    </svg>
  )
}
