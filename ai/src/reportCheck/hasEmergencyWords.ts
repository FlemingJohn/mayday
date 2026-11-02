const emergencyWords = [
  "injured", "bleeding", "unconscious", "fire", "sinking", "no water",
  "beaten", "attacked", "kill myself", "suicide", "dying",
  "घायल", "खून", "आग", "डूब", "पानी नहीं",
]

export function hasEmergencyWords(text: string | null): boolean {
  if (text === null) {
    return false
  }
  const lowerText = text.toLowerCase()
  return emergencyWords.some((word) => lowerText.includes(word))
}
