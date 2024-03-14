// @ts-check
import { expect, test } from "@playwright/test"
test.beforeEach(async ({ page }) => {
  await page.goto("/")
})

test("«Change!» text is defined", async ({ page, browser, browserName }) => {
  test.info().annotations.push({
    type: "browser version",
    description: `browser.version: ${browser.version()} and browserName: ${browserName}`,
  })

  await page.goto("/")

  const getTitle = page.getByRole("heading", {
    name: "Changes!",
    level: 1,
  })

  await expect(getTitle).toBeDefined()
})
