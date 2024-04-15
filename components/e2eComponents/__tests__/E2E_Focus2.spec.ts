import { expect, test } from "@playwright/test"

test.describe("Testing focus", () => {
  test("Is focus?", async ({ page }) => {
    await page.goto("/e2e")

    const getData = page.getByTestId("focus")

    await getData.focus()

    await expect(getData).toBeFocused()
  })
})
