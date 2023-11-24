import { INDEX_Challenges } from "@/components/challenges/INDEX"
import { useRouter } from "next/router"

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

export type AcceptedRoutes_TYPE = keyof typeof AcceptedRoutes_Challenges_ENUM

export type AllDataInterface = {
  UI: {
    title: string
  }
  route: AcceptedRoutes_TYPE
  howManyChallenges: number
  hasSomethingSpecial?: {
    icon: string
  }
}[]

export const allDataChallenges: AllDataInterface = [
  {
    UI: {
      title: "extracting Logic into Reducer",
    },
    route: "extractingLogicIntoReducer",
    howManyChallenges: 3,
  },

  {
    UI: {
      title: "Responding to Events (pending)",
    },
    route: "respondingToEvents",
    howManyChallenges: 2,
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

      {/* <ul>
        {allDataChallenges.map((x, index) => {
          return (
            <>
              <li>
                <h2>{x.UI.title} Challenges</h2>
                <ul>
                  {Array(x.howManyChallenges)
                    .fill(0)
                    .map((xDeep1, indexDeep1) => {
                      return (
                        <>
                          <li>
                            <Link
                              href={{
                                pathname: `${asPath}/${x.route}/${indexDeep1 + 1}`,
                                query: {
                                  howManyChallenges: x.howManyChallenges,
                                },
                              }}
                              as={`${asPath}/${x.route}/${indexDeep1 + 1}`}>
                              Challenge number {indexDeep1 + 1}
                            </Link>
                          </li>
                        </>
                      )
                    })}
                </ul>
              </li>
            </>
          )
        })}
      </ul> */}
    </>
  )
}
