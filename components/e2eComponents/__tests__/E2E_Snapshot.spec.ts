import { expect, test } from "@playwright/test"

/*
 * Prefer to use «toHaveScreenshot(name)»
 * Source: https://playwright.dev/docs/api/class-pageassertions#page-assertions-to-have-screenshot-1
 */

test("example test", async ({ page }) => {
  await page.goto("https://playwright.dev")
  expect(await page.screenshot()).toMatchSnapshot("landing.png")
})
