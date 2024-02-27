import { cleanup, render, screen } from "@testing-library/react"
import userEvent from "@testing-library/user-event"
import { afterEach, describe, expect, it } from "vitest"

describe("Options on a select", (ctx_describe) => {
  afterEach(cleanup)

  it("selectOptions", async () => {
    const user = userEvent.setup()

    render(
      <select multiple>
        <option value="1A">1A</option>
        <option value="2B">1B</option>
        <option value="3C">1C</option>
      </select>,
    )

    await user.selectOptions(screen.getByRole("listbox"), ["1A", "1C"])

    expect(
      (screen.getByRole("option", { name: "1A" }) as HTMLOptionElement)
        .selected,
    ).toBe(true)
    expect(
      (screen.getByRole("option", { name: "1B" }) as HTMLOptionElement)
        .selected,
    ).toBe(false)
    expect(
      (screen.getByRole("option", { name: "1C" }) as HTMLOptionElement)
        .selected,
    ).toBe(true)
  })

  it("deselectOptions", async () => {
    const user = userEvent.setup()

    render(
      <select multiple>
        <option value="1">A</option>
        <option
          value="2"
          selected>
          B
        </option>
        <option value="3">C</option>
      </select>,
    )

    await user.deselectOptions(screen.getByRole("listbox"), "2")

    expect((screen.getByText("B") as HTMLOptionElement).selected).toBe(false)
  })
})
