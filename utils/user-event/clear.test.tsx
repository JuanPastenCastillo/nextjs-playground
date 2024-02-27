import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, test } from "vitest"

const SomeTextArea = ({ defaultValueProp = "Hello, World" }) => {
  return <textarea defaultValue={defaultValueProp} />
}

test("clear", async () => {
  const user = userEvent.setup()

  render(<SomeTextArea />)

  const getTheComponent = screen.getByRole("textbox")

  await user.clear(getTheComponent)

  expect((getTheComponent as HTMLTextAreaElement).value).toBe("")
})
