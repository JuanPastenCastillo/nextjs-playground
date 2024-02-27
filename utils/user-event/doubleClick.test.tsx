import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, it, vi } from "vitest"

it("double click", async () => {
  const onChange = vi.fn()
  const user = userEvent.setup()

  render(
    <input
      type="checkbox"
      onChange={onChange}
    />,
  )

  const checkbox = screen.getByRole("checkbox")

  await user.dblClick(checkbox)
  await user.dblClick(checkbox)
  await user.dblClick(checkbox)

  expect(onChange).toHaveBeenCalledTimes(6)
  expect((checkbox as HTMLInputElement).checked).toBeFalsy()
})
