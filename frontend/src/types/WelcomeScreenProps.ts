import type { Language } from "./Language.ts"

export type WelcomeScreenProps = {
  onStart: (language: Language) => void
}
