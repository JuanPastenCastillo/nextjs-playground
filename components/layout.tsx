import { ReactNode } from "react"
import { INDEX_NavBar } from "./navBar/INDEX_NavBar"

type Props = {
  children: ReactNode
}

export const Layout = ({ children }: Props) => {
  return (
    <>
      <INDEX_NavBar />

      <main>{children}</main>
    </>
  )
}
