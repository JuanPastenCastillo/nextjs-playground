import { expect, test } from "@playwright/test"

test.describe("Testing e2e Press", () => {
  test("Press Shift+A", async ({ page }) => {
    await page.goto("/e2e")

    const getData = page.getByTestId("input-press")

    await getData.press("Shift+A")

    await expect(getData).toHaveValue("A")
  })
})
