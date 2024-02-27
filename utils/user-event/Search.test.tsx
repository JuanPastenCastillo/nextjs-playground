import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it, vi } from "vitest"
import { Search, SearchParent } from "./Search"

describe("Search", (ctx_describe) => {
  afterEach(cleanup)

  it("Is render component", (ctx_it) => {
    render(<SearchParent />)
  })

  it("correct text", (ctx) => {
    render(<SearchParent />)
    expect(screen.getByText("Search:")).toBeDefined()
  })

  it("calls the onChange callback handler: fireEvent", () => {
    const onChange = vi.fn()

    render(
      <Search
        value=""
        onChange={onChange}>
        Search:
      </Search>,
    )

    fireEvent.change(screen.getByRole("textbox"), {
      target: { value: "JavaScript" },
    })

    expect(onChange).toHaveBeenCalledTimes(1)
  })

  it("calls the onChange callback handler: user-event", async () => {
    const onChange = vi.fn()

    render(
      <Search
        value=""
        onChange={onChange}>
        Search:
      </Search>,
    )

    await userEvent.type(screen.getByRole("textbox"), "JavaScript")

    expect(onChange).toHaveBeenCalledTimes(10)
  })
})
