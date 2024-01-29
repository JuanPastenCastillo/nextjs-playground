import { nextJSRoutesFix } from "@/utils/test-util-nextjs"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { NavBar } from "../INDEX"

/* This need to be done in order to not get errors from next/navigation or next/router

!FH0
Extract this to utils to some file to make a single import of that and use everywhere

Source: stsiarzhanau, Dec 14, 2023, link: https://stackoverflow.com/a/77661187/13316519
*/

nextJSRoutesFix()

describe("render", () => {
  it("component is render", () => {
    render(<NavBar />)

    expect(screen.getByText("default value")).toBeDefined()

    // const routes_1 = screen.getByRole("link", { name: `/\//i` })
    // const routes_2 = screen.getByRole("link", {
    //   name: `/${Routes.CHALLENGES}/i`,
    // })
    // const routes_3 = screen.getByRole("link", { name: `/${Routes.ORG}/i` })

    /* expect(routes_1).toBeInDocument()
      expect(routes_2).toBeInDocument()
      expect(routes_3).toBeInDocument() */
  })
})
