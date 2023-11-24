import { AcceptedRoutes_Challenges_ENUM, allDataChallenges } from "@/pages/challenges"
import { useMemo } from "react"

export type IsValidSlug_PROPS = {
  shouldShow: boolean
  theSlug?: string[]
  theQuery?: {}
  getTitle?: string
}

export const useIsValidSlug = ({ allRouter, routerReady }: { allRouter: any; routerReady: boolean }) => {
  const isValidSlug: IsValidSlug_PROPS = useMemo(() => {
    let workWithPath = allRouter.asPath.split("/").slice(2, 4)

    let isLength2 = workWithPath.length === 2
    let firstValueIsCorrect = isLength2 && Object.values(AcceptedRoutes_Challenges_ENUM).some((x) => x === workWithPath[0])
    let secondValueIsNumber = isLength2 && typeof Number(workWithPath[1]) === "number" && !isNaN(Number(workWithPath[1])) && Number(workWithPath[1]) > 0
    let isSecondValueIsInRange =
      isLength2 &&
      secondValueIsNumber &&
      (allDataChallenges.filter((x) => x.route === workWithPath[0]).length === 1
        ? allDataChallenges.filter((x) => x.route === workWithPath[0]).map((x) => x.howManyChallenges >= Number(workWithPath[1]))[0]
        : false)

    if (isLength2 && firstValueIsCorrect && secondValueIsNumber && isSecondValueIsInRange) {
      let theSlug = allRouter.query?.slug && allRouter.query?.slug

      let getTitle = allDataChallenges.filter((x) => x.route === theSlug[0])[0].UI.title

      return {
        shouldShow: true,
        theSlug,
        theQuery: allRouter.query,
        getTitle,
      }
    }

    return {
      shouldShow: false,
    }
  }, [routerReady])

  return { isValidSlug }
}
