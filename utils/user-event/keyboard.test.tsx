import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { KeyboardComponent } from "./keyboard"

describe("Testing single keys", (ctx_describe) => {
  afterEach(cleanup)

  it("Everything correct", (ctx) => {
    render(<KeyboardComponent />)
    const getButton = screen.getByRole("button")
    expect(getButton).toBeDefined()
  })

  it("F1 show the modal", async (ctx_it) => {
    render(<KeyboardComponent />)
    // const user = userEvent.setup()

    // await user.keyboard("[Fn1]")
    fireEvent.keyDown(document, { key: "F1" })

    const getHiddenText = screen.getByText("Showed!")
    expect(getHiddenText).toBeDefined()
  })

  it("F1 show the modal, press again to close it", async (ctx_it) => {
    render(<KeyboardComponent />)
    fireEvent.keyDown(document, { key: "F1" })

    const getHiddenText = screen.getByText("Showed!")

    expect(getHiddenText).toBeDefined()

    fireEvent.keyDown(document, { key: "F1" })
    const getHiddenText_2 = screen.queryByText("Showed!")
    expect(getHiddenText_2).toBeNull()
  })

  it("F1 show the modal, press ''Escape to close it", async (ctx_it) => {
    render(<KeyboardComponent />)
    fireEvent.keyDown(document, { key: "F1" })

    const getHiddenText = screen.getByText("Showed!")

    expect(getHiddenText).toBeDefined()

    fireEvent.keyDown(document, { key: "Escape" })
    const getHiddenText_2 = screen.queryByText("Showed!")
    expect(getHiddenText_2).toBeNull()
  })
})
