import { render } from "@testing-library/react"
import { describe, expect, it } from "vitest"
import { DialogComponent } from "../DialogComponent"

describe("Testing Dialog", (ctx_describe) => {
  let getRender = render(<DialogComponent />)

  it("Dialog exist", (ctx_it) => {
    let openDialog = getRender.getByText("Open Dialog 🟩")
    let closeDialog = getRender.getByText("Close🟥")

    expect(openDialog).toBeDefined()
    expect(closeDialog).toBeDefined()
  })
})
