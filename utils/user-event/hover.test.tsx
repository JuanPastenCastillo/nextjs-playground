import { render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { expect, it } from "vitest"

it("hover/unhover", async () => {
  const user = userEvent.setup()
  render(<div>Hover</div>)

  const hoverBox = screen.getByText("Hover")
  let isHover = false

  hoverBox.addEventListener("mouseover", () => {
    isHover = true
  })
  hoverBox.addEventListener("mouseout", () => {
    isHover = false
  })

  expect(isHover).toBeFalsy()

  await user.hover(hoverBox)

  expect(isHover).toBeTruthy()

  await user.unhover(hoverBox)

  expect(isHover).toBeFalsy()
})
