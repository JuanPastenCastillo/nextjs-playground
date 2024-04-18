import { expect, test } from "@playwright/experimental-ct-react"
import { E2E_Press } from "../E2E_Press"

test.describe("Testing E2E_Press", () => {
  test.skip(`Component E2E_Press is showed`, async ({ mount }) => {
    const component = await mount(<E2E_Press />)

    await expect(component).toBeVisible()
  })
  /* Same history here as «E2E_PressSequentially.spec»
   * This test don't work when is use as a component but it work if you use it in a page
   * On firefox, chromium and webkit it trows the same error:
   *   Test timeout of 10000ms exceeded.
   *   (...)
   *   await getData.press("Shift+A")
   */

  test.skip("Press shift+A", async ({ page, mount }) => {
    const component = await mount(<E2E_Press />)

    const getData = component.getByTestId("input-press")
    await getData.press("Shift+A")

    await expect(getData).toHaveValue("A")
  })

  test.skip("Press control+shift+t", async ({ page, mount }) => {
    const component = await mount(<E2E_Press />)
    /*code here*/
  })
})
