import { ReactNode } from "react"
import { NavBar } from "./navBar/INDEX"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <NavBar />

      <main>{children}</main>
    </>
  )
}
