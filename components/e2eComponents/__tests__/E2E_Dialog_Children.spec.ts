import { expect, test } from "@playwright/test"

test.describe("Group of tests", () => {
  test("Open and close Dialog with click", async ({ page }) => {
    await page.goto("/e2e")

    const getOpenDialog = page.getByTestId("dialog-open")
    const getDialogContent = page.getByTestId("dialog-content")

    await expect(getOpenDialog).toBeVisible()
    await expect(getDialogContent).not.toBeVisible()

    await getOpenDialog.click()
    await expect(getDialogContent).toBeVisible()

    const getChildren = page.getByTestId("dialog-children")
    await expect(getChildren).toBeVisible()
  })
})
