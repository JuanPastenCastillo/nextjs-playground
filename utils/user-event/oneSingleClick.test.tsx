import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"
import { CheckboxForTest } from "./CheckboxForTest"

describe("Testing click", (ctx_describe) => {
  afterEach(cleanup)

  it("Render correctly", (ctx) => {
    render(<CheckboxForTest />)

    screen.debug()
  })

  it("component only with one checkbox: click equal true", async () => {
    const user = userEvent.setup()

    render(<CheckboxForTest />)

    const checkbox = screen.getByRole("checkbox")

    await user.click(checkbox)

    expect((checkbox as HTMLInputElement).checked).toBe(true)
  })

  it("component only with one checkbox: click equal true and other click means false", async () => {
    const user = userEvent.setup()

    render(<CheckboxForTest />)

    const checkbox = screen.getByRole("checkbox")

    await user.click(checkbox)
    await user.click(checkbox)

    expect((checkbox as HTMLInputElement).checked).toBeFalsy()
  })
})
