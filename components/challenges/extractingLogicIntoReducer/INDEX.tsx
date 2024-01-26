import { IsValidSlug_PROPS } from "@/utils/useIsValidSlug"
import { useRouter as useNavigation } from "next/navigation"
import { Dispatch_actions_from_event_handlers } from "./1/Dispatch_actions_from_event_handlers"
import { Challenge_2 } from "./2/Challenge_2"
import { Challenge_4 } from "./4/Challenge_4"
import { ExtractingLogicIntoReducerWrapper } from "./styles/ExtractingLogicIntoReducerWrapper"

/**
 * Challenges comes from this page: https://react.dev/learn/extracting-state-logic-into-a-reducer#challenges

//!FH0
*/

export const ExtractingLogicIntoReducer_allChallenges = [Dispatch_actions_from_event_handlers, Challenge_2, Challenge_4]

export const ExtractingLogicIntoReducer = (isValidSlug: IsValidSlug_PROPS) => {
  let TheComponent = ExtractingLogicIntoReducer_allChallenges[Number(isValidSlug.theSlug?.[1]) - 1]

  let navigate = useNavigation()

  let goPrevious = () => {
    navigate.push("/challenges")
  }

  return (
    <ExtractingLogicIntoReducerWrapper>
      <h2>{isValidSlug.getTitle}</h2>
      <p onClick={goPrevious}>Click here to go back</p>

      <TheComponent />
    </ExtractingLogicIntoReducerWrapper>
  )
}
