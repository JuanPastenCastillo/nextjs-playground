import { expect, test } from "@playwright/experimental-ct-react"
import { E2E_Focus } from "../E2E_Focus"

test.describe("Group of tests", () => {
  test.skip(`Component E2E_Focus is showed`, async ({ mount }) => {
    const component = await mount(<E2E_Focus />)

    await expect(component).toBeVisible()
  })
  /* Same history here as «E2E_PressSequentially.spec»
   * This test don't work when is use as a component but it work if you use it in a page
   * On firefox, chromium and webkit it trows the same error:
   *   Test timeout of 10000ms exceeded.
   *   (...)
   *   await getData.press("Shift+A")
   */

  test.skip("Individual test", async ({ page, mount }) => {
    const component = await mount(<E2E_Focus />)

    const getData = component.getByTestId("focus")

    await getData.focus()

    await expect(getData).toBeFocused()
  })
})
