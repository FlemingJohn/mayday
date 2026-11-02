import { useState } from "preact/hooks"
import { LanguageChip } from "../components/LanguageChip.tsx"
import { PillButton } from "../components/PillButton.tsx"
import { RoundIconButton } from "../components/RoundIconButton.tsx"
import { AnchorIcon } from "../icons/AnchorIcon.tsx"
import { ArrowIcon } from "../icons/ArrowIcon.tsx"
import { LockIcon } from "../icons/LockIcon.tsx"
import { SoundIcon } from "../icons/SoundIcon.tsx"
import { CargoShipIllustration } from "../illustrations/CargoShipIllustration.tsx"
import { languageChoices } from "../lib/languageChoices.ts"
import type { Language } from "../types/Language.ts"
import type { WelcomeScreenProps } from "../types/WelcomeScreenProps.ts"

export function WelcomeScreen({ onStart }: WelcomeScreenProps) {
  const [language, setLanguage] = useState<Language>("hindi")
  return (
    <main class="screen">
      <header class="screen-header">
        <RoundIconButton label="Mayday" icon={<AnchorIcon />} isFilled />
        <RoundIconButton label="Read this screen aloud" icon={<SoundIcon />} />
      </header>
      <p class="screen-hint">Private help for seafarers, in your language</p>
      <h1 class="screen-title">Get Help Before You're <em>Stranded</em></h1>
      <CargoShipIllustration />
      <div class="language-list">
        {languageChoices.map((choice) => (
          <LanguageChip
            key={choice.language}
            label={choice.nativeName}
            isSelected={choice.language === language}
            onPress={() => setLanguage(choice.language)}
          />
        ))}
      </div>
      <div class="screen-spacer" />
      <PillButton label="Get started" variant="main" icon={<ArrowIcon />} onPress={() => onStart(language)} />
      <p class="privacy-note"><LockIcon /> Your name is never shared</p>
    </main>
  )
}
