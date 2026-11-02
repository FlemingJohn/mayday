import { useState } from "preact/hooks"
import { HomeScreen } from "./seafarer/HomeScreen.tsx"
import { WelcomeScreen } from "./seafarer/WelcomeScreen.tsx"
import type { Screen } from "./types/Screen.ts"

export function App() {
  const [screen, setScreen] = useState<Screen>("welcome")
  if (screen === "welcome") {
    return <WelcomeScreen onStart={() => setScreen("home")} />
  }
  return <HomeScreen shipName="Ocean Pearl" />
}
