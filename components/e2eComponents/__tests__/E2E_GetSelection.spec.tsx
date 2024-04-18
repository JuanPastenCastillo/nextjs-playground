import { expect, test } from "@playwright/experimental-ct-react"
import { E2E_GetSelection } from "../E2E_GetSelection"

test.describe("Testing E2E_GetSelection", () => {
  test(`Component E2E_GetSelection is showed`, async ({ mount }) => {
    const component = await mount(<E2E_GetSelection />)

    await expect(component).toBeVisible()
  })
  test("Selection is correct", async ({ page, mount }) => {
    const component = await mount(<E2E_GetSelection />)

    // await component.focus()

    const selection = await component.evaluate(() => {
      const range = document.createRange()
      range.selectNode(document.querySelector("p")?.firstChild as ChildNode)
      window.getSelection()?.addRange(range)
      return window.getSelection()?.toString()
    })

    const selectedText = await component.evaluate(() => {
      return window.getSelection()?.toString()
    })

    expect(selection, `The actual selection: ${selection}`).toBe(
      "text to select",
    )
  })
})
