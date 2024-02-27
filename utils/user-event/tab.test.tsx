import "@testing-library/jest-dom/vitest"
import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, it } from "vitest"

it("tab", async () => {
  const user = userEvent.setup()
  render(
    <div>
      <input type="checkbox" />
      <input type="radio" />
      <input type="number" />
    </div>,
  )

  const checkbox = screen.getByRole("checkbox")
  const radio = screen.getByRole("radio")
  const number = screen.getByRole("spinbutton")

  expect(document.body).toHaveFocus()

  await user.tab()

  expect(checkbox).toHaveFocus()

  await user.tab()

  expect(radio).toHaveFocus()

  await user.tab()

  expect(number).toHaveFocus()

  await user.tab()

  // cycle goes back to the body element
  expect(document.body).toHaveFocus()

  await user.tab()

  expect(checkbox).toHaveFocus()
})
