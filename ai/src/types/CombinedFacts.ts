export type CombinedFacts = {
  shipName: string | null
  imoNumber: string | null
  unpaidSinceMonth: string | null
  monthlyWage: number | null
  currency: string | null
  isFoodLow: boolean | null
  isManagerResponding: boolean | null
  isContractFinished: boolean | null
  isSomeoneInDanger: boolean
  notes: string
}
