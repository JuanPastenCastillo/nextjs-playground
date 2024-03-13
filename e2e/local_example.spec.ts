// @ts-check
import { expect, test } from "@playwright/test"

test("Change text is defined", async ({ page }) => {
  await page.goto("/")

  const getTitle = page.getByRole("heading", {
    name: "Changes!",
    level: 1,
  })

  await expect(getTitle).toBeDefined()
})
