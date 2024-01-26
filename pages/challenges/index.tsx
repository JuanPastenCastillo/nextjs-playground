import { INDEX_Challenges } from "@/components/challenges/INDEX"
import { ExtractingLogicIntoReducer_allChallenges } from "@/components/challenges/extractingLogicIntoReducer/INDEX"
import { useRouter } from "next/router"
import { FC } from "react"

export enum AcceptedRoutes_Challenges_ENUM {
  useState = "useState",
  respondingToEvents = "respondingToEvents",
  componentMemory = "componentMemory",
  stateAsSnapshot = "stateAsSnapshot",
  queueingSeriesOfState = "queueingSeriesOfState",
  updateObjectInState = "updateObjectInState",
  updateArrayInState = "updateArrayInState",
  reactToInputWithState = "reactToInputWithState",
  choosingCorrectState = "choosingCorrectState",
  sharingStateBetweenComponents = "sharingStateBetweenComponents",
  preserveAndResetState = "preserveAndResetState",
  useReducer = "useReducer",
  extractingLogicIntoReducer = "extractingLogicIntoReducer",
  passingDataDeeplyWithContext = "passingDataDeeplyWithContext",
  referencingValuesWithRefs = "referencingValuesWithRefs",
  manipulateDOMWithRefs = "manipulateDOMWithRefs",
  syncWithEffects = "syncWithEffects",
  youMightNotNeedAnEffect = "youMightNotNeedAnEffect",
  lifecybleOfReactiveEffects = "lifecybleOfReactiveEffects",
  separatingEventsFromEffects = "separatingEventsFromEffects",
  removingEffectDependencies = "removingEffectDependencies",
  reusingLogicWithCustomHooks = "reusingLogicWithCustomHooks",
}

// export type AcceptedRoutes_TYPE = keyof typeof AcceptedRoutes_Challenges_ENUM

export type AllDataInterface = {
  UI: {
    title: string
  }
  route: keyof typeof AcceptedRoutes_Challenges_ENUM
  howManyChallenges: number
  allComponent?: FC[]
  hasSomethingSpecial?: {
    icon?: string
    specificStyles?: {
      numberOfCards?: number
    }
  }
}[]

export const allDataChallenges: AllDataInterface = [
  {
    UI: {
      title: "extracting Logic into Reducer",
    },
    route: AcceptedRoutes_Challenges_ENUM.extractingLogicIntoReducer,
    howManyChallenges: ExtractingLogicIntoReducer_allChallenges.length,
    allComponent: ExtractingLogicIntoReducer_allChallenges,
  },

  {
    UI: {
      title: "Responding to Events (pending)",
    },
    route: AcceptedRoutes_Challenges_ENUM.respondingToEvents,
    howManyChallenges: 2,
    hasSomethingSpecial: {
      specificStyles: {
        numberOfCards: 4,
      },
    },
  },
]

export default function Pages() {
  const { asPath } = useRouter()

  return (
    <>
      <INDEX_Challenges
        allDataChallenges={allDataChallenges}
        asPath={asPath}
      />
    </>
  )
}
