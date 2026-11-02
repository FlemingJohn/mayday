import type { CombinedFacts } from "../types/CombinedFacts.ts"
import type { ReportCheckInput } from "../types/ReportCheckInput.ts"
import type { SpokenFacts } from "../types/SpokenFacts.ts"
import type { WrittenFacts } from "../types/WrittenFacts.ts"
import { getUnpaidSinceMonth } from "./getUnpaidSinceMonth.ts"
import { hasEmergencyWords } from "./hasEmergencyWords.ts"

export function combineFacts(
  input: ReportCheckInput,
  spokenFacts: SpokenFacts | null,
  writtenFacts: WrittenFacts | null,
): CombinedFacts {
  return {
    shipName: input.shipName ?? writtenFacts?.shipName ?? spokenFacts?.shipName ?? null,
    imoNumber: writtenFacts?.imoNumber ?? null,
    unpaidSinceMonth: getUnpaidSinceMonth(spokenFacts, writtenFacts, input.reportedAt),
    monthlyWage: writtenFacts?.monthlyWage ?? null,
    currency: writtenFacts?.currency ?? null,
    isFoodLow: spokenFacts?.isFoodLow ?? null,
    isManagerResponding: spokenFacts?.isManagerResponding ?? null,
    isContractFinished: spokenFacts?.isContractFinished ?? null,
    isSomeoneInDanger: spokenFacts?.isSomeoneInDanger === true || hasEmergencyWords(input.text),
    notes: [input.text, spokenFacts?.transcript].filter(Boolean).join("\n"),
  }
}
