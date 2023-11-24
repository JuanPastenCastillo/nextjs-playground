import { IsValidSlug_PROPS } from "@/utils/useIsValidSlug"
import { Challenge_1 } from "./1/Challenge_1"
import { Challenge_2 } from "./2/Challenge_2"
import { Challenge_3 } from "./3/Challenge_3"
import { ExtractingLogicIntoReducerWrapper } from "./styles/ExtractingLogicIntoReducerWrapper"

const allChallenges = [Challenge_1, Challenge_2, Challenge_3]

export const ExtractingLogicIntoReducer = (isValidSlug: IsValidSlug_PROPS) => {
  let TheComponent = allChallenges[Number(isValidSlug.theSlug?.[1]) - 1]

  return (
    <ExtractingLogicIntoReducerWrapper>
      <h2>{isValidSlug.getTitle}</h2>

      <TheComponent />
    </ExtractingLogicIntoReducerWrapper>
  )
}
