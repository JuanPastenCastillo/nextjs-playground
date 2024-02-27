import { nextJSRoutesFix } from "@/utils/test-util-nextjs"
import { render, screen } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { INDEX_NavBar, Routes } from "../INDEX_NavBar"

nextJSRoutesFix()

describe("render", () => {
  it("component is render", () => {
    render(<INDEX_NavBar />)

    expect(screen.getByText("default value")).toBeDefined()

    // const routes_1 = screen.getByRole("link", { name: `/\//i` })

    let getChallenges = screen.getAllByText(`${Routes.CHALLENGES}`)

    expect(getChallenges).toBeDefined()
    // const routes_2 = screen.getByRole("link", {
    //   name: `/${Routes.CHALLENGES}/i`,
    // })
    // const routes_3 = screen.getByRole("link", { name: `/${Routes.ORG}/i` })

    /* expect(routes_1).toBeInDocument()
      expect(routes_2).toBeInDocument()
      expect(routes_3).toBeInDocument() */
  })
})
