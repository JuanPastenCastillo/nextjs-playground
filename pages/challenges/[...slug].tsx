import { ExtractingLogicIntoReducer } from "@/components/challenges/extractingLogicIntoReducer/INDEX"
import { useIsValidSlug } from "@/utils/useIsValidSlug"
import { useRouter as useNavigation } from "next/navigation"
import { useRouter } from "next/router"
import { AcceptedRoutes_Challenges_ENUM } from "."

export default function Slug() {
  const router = useRouter()
  // console.log("router:", router)

  let { isValidSlug } = useIsValidSlug({ allRouter: router, routerReady: router.isReady })

  let navigate = useNavigation()

  let goPrevious = () => {
    navigate.push("/challenges")
  }

  return (
    <>
      {router.isReady && isValidSlug.shouldShow ? (
        <>
          {isValidSlug.theSlug?.[0] === AcceptedRoutes_Challenges_ENUM.extractingLogicIntoReducer ? (
            <>
              <ExtractingLogicIntoReducer
                shouldShow
                getTitle={isValidSlug.getTitle}
                theQuery={isValidSlug.theQuery}
                theSlug={isValidSlug.theSlug}
              />
            </>
          ) : (
            <>
              <h2>Another component for sure</h2>
              <p onClick={goPrevious}>Click here to go back</p>
            </>
          )}
        </>
      ) : (
        router.isReady && (
          <>
            <h2>🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥🟥Nothing bro🟥</h2>

            <p onClick={goPrevious}>Click here to go back</p>
          </>
        )
      )}
    </>
  )
}
