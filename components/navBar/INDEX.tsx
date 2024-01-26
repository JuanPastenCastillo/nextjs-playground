import Link from "next/link"
import { useRouter as useNavigation } from "next/navigation"
import { useRouter } from "next/router"
import { Fragment, useMemo } from "react"
import { SlicedButton } from "../ui/buttons/Sliced"
import { NavBarWrapper } from "./styles/NavBarWrapper"

export enum Routes {
  HOME = "/",
  CHALLENGES = "challenges",
  ORG = "ORG",
}

console.log("Routes:", Routes)

export type Routes_Accepted = keyof typeof Routes

export const NavBar = () => {
  let theNavigation = useNavigation()

  let handleMoveUserTo = (e: any, toWhere: string) => {
    if (e.type === "click" || (e instanceof KeyboardEvent && e.key === "Enter")) theNavigation.push(`/${toWhere}`)
  }

  let whichRoute = useRouter()
  const actualRoute = useMemo(() => {
    if (whichRoute.isReady) {
      let isFirstPartOfURL = whichRoute.asPath.split("/")[1]

      if (isFirstPartOfURL === "") return Routes.HOME

      let whichActualRoute = Object.values(Routes)
        .filter((x) => x !== "/")
        .find((x) => x === isFirstPartOfURL)

      if (whichActualRoute) return whichActualRoute

      return false
    }
  }, [whichRoute.asPath, whichRoute.isReady])

  return (
    <NavBarWrapper>
      <ul>
        {Object.values(Routes).map((x, index) => {
          if (x === "/") {
            return (
              <>
                <Link href={x}>home</Link>
              </>
            )
          }

          return (
            <Fragment key={x}>
              <Link href={x}>
                <SlicedButton isActive={actualRoute === x}>{x}</SlicedButton>
              </Link>
            </Fragment>
          )
        })}

        {/* <li>
          <Link
            href={Routes.HOME}
            className={`${actualRoute === Routes.HOME && Classes_NavBar.HOME_ACTIVE}`}
            tabIndex={0}>
            home{" "}
          </Link>
        </li>
        <li>
          <span
            onClick={(e) => handleMoveUserTo(e, Routes.CHALLENGES)}
            onKeyDown={(e) => handleMoveUserTo(e, Routes.CHALLENGES)}>
            <SlicedButton isActive={actualRoute === Routes.CHALLENGES}>Challenges</SlicedButton>
          </span>
        </li> */}
      </ul>
    </NavBarWrapper>
  )
}
