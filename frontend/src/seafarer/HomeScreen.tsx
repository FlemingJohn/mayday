import { RoundIconButton } from "../components/RoundIconButton.tsx"
import { StatTile } from "../components/StatTile.tsx"
import { TalkButton } from "../components/TalkButton.tsx"
import { BellIcon } from "../icons/BellIcon.tsx"
import { CameraIcon } from "../icons/CameraIcon.tsx"
import { CheckIcon } from "../icons/CheckIcon.tsx"
import { KeyboardIcon } from "../icons/KeyboardIcon.tsx"
import { ShipIcon } from "../icons/ShipIcon.tsx"
import type { HomeScreenProps } from "../types/HomeScreenProps.ts"

export function HomeScreen({ shipName }: HomeScreenProps) {
  return (
    <main class="screen">
      <header class="screen-header">
        <div class="ship-header">
          <RoundIconButton label="Your ship" icon={<ShipIcon />} isFilled />
          <div>
            <span class="ship-header-caption">Your ship</span>
            <span class="ship-header-name">{shipName}</span>
          </div>
        </div>
        <RoundIconButton label="Updates" icon={<BellIcon />} />
      </header>
      <h1 class="screen-title">What's Happening <em>On Board?</em></h1>
      <TalkButton label="Hold to talk" hint="In any language" />
      <div class="tile-row">
        <StatTile icon={<KeyboardIcon />} label="Type" onPress={() => undefined} />
        <StatTile icon={<CameraIcon />} label="Photo" onPress={() => undefined} />
        <StatTile icon={<CheckIcon />} label="Check" onPress={() => undefined} />
      </div>
    </main>
  )
}
