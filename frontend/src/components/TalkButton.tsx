import { MicrophoneIcon } from "../icons/MicrophoneIcon.tsx"
import { VoiceWaveIllustration } from "../illustrations/VoiceWaveIllustration.tsx"
import type { TalkButtonProps } from "../types/TalkButtonProps.ts"

export function TalkButton({ label, hint, onPress }: TalkButtonProps) {
  return (
    <button type="button" class="talk-button" onClick={onPress}>
      <span class="talk-button-circle">
        <MicrophoneIcon size={34} />
      </span>
      <span class="talk-button-text">
        <span class="talk-button-label">{label}</span>
        <span class="talk-button-hint">{hint}</span>
        <VoiceWaveIllustration />
      </span>
    </button>
  )
}
