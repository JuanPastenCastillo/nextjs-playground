import { expect, test } from "@playwright/test"

test.describe("Testing new tab", () => {
  test("New tab with left click", async ({ page, context }) => {
    // Start waiting for new page before clicking. Note no await.
    const pagePromise = context.waitForEvent("page")
    await page.goto("/e2e")
    await page.getByText("Go to a new tab").click()

    const newPage = await pagePromise
    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL("/e2e-2")
  })

  test("New tab with middle click", async ({ page, context }) => {
    // Start waiting for new page before clicking. Note no await.
    const pagePromise = context.waitForEvent("page")
    await page.goto("/e2e")
    await page.getByText("Go to a new tab").click({ button: "middle" })

    const newPage = await pagePromise
    await newPage.waitForLoadState()

    await expect(newPage).toHaveURL("/e2e-2")
  })
})
