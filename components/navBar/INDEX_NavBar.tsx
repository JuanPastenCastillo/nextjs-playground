import Link from "next/link"
import { useRouter as useNavigation } from "next/navigation"
import { useRouter } from "next/router"
import { useMemo } from "react"
import { SlicedButton } from "../ui/buttons/Sliced"
import { NavBarWrapper } from "./styles/NavBarWrapper"

export enum Routes {
  HOME = "/",
  CHALLENGES = "challenges",
  ORG = "ORG",
}

export type Routes_Accepted = keyof typeof Routes

type Props = {
  justSomeText?: string
}

export const INDEX_NavBar = ({ justSomeText = "default value" }: Props) => {
  let theNavigation = useNavigation()

  let handleMoveUserTo = (e: any, toWhere: string) => {
    if (e.type === "click" || (e instanceof KeyboardEvent && e.key === "Enter"))
      theNavigation.push(`/${toWhere}`)
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
    <NavBarWrapper isHome={actualRoute === "/"}>
      <ul>
        {Object.values(Routes).map((x, index) => {
          if (x === "/") {
            return (
              <li key={x}>
                <Link href={x}>home</Link>
              </li>
            )
          }

          return (
            <li key={x}>
              <Link href={x}>
                <SlicedButton isactive={actualRoute === x}>{x}</SlicedButton>
              </Link>
            </li>
          )
        })}
      </ul>

      <p>{justSomeText}</p>
    </NavBarWrapper>
  )
}
