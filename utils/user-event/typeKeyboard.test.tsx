import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, it } from "vitest"

it("type into an input field", async () => {
  const user = userEvent.setup()

  render(<input defaultValue="Hello," />)
  const input = screen.getByRole("textbox")

  await user.type(input, " World!")

  expect((input as HTMLInputElement).value).toBe("Hello, World!")
})
