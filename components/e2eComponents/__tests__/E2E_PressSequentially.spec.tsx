import { expect, test } from "@playwright/experimental-ct-react"
import { E2E_PressSequentially } from "../E2E_PressSequentially"

test.describe("Testing E2E_PressSequentially", () => {
  test(`Component E2E_PressSequentially is showed`, async ({ mount }) => {
    const component = await mount(<E2E_PressSequentially />)

    await expect(component).toBeVisible()
  })
  /*
   * This test don't work when is use as a component but it work if you use it in a page
   * On firefox, chromium and webkit it trows the same error:
   *   Test timeout of 10000ms exceeded.
   *   (...)
   *   await getData.fill("Hi!")
   *   // with await getData.pressSequentially("Hi!") is the same history
   */
  test.skip("Sequentially", async ({ page, mount }) => {
    const component = await mount(<E2E_PressSequentially />)

    const getData = component.getByTestId("input-sequentially")

    await getData.pressSequentially("Hi!")
    // await getData.fill("Hi!")

    await expect(getData).toHaveValue("Hi!")
  })
})
