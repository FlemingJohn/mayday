const barHeights = [6, 14, 20, 10, 16, 6, 18, 10, 4, 8]

export function VoiceWaveIllustration() {
  return (
    <svg width="60" height="24" viewBox="0 0 60 24" aria-hidden="true" style={{ color: "var(--color-accent)" }}>
      {barHeights.map((height, index) => (
        <rect
          key={index}
          x={index * 6}
          y={(24 - height) / 2}
          width="3"
          height={height}
          rx="1.5"
          fill="currentColor"
          opacity={height >= 14 ? 1 : 0.6}
        />
      ))}
    </svg>
  )
}
