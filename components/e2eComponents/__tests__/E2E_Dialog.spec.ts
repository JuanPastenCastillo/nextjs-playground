import { expect, test } from "@playwright/test"

test.describe("Testing Dialog on page", () => {
  test("Open and close Dialog with click", async ({ page }) => {
    await page.goto("/e2e")

    const getOpenDialog = page.getByTestId("dialog-open")
    const getDialogContent = page.getByTestId("dialog-content")

    await expect(getOpenDialog).toBeVisible()
    await expect(getDialogContent).not.toBeVisible()

    await getOpenDialog.click()
    await expect(getDialogContent).toBeVisible()

    const closeDialog = page.getByTestId("close-dialog")
    await closeDialog.click()
    await expect(getDialogContent).not.toBeVisible()

    await getOpenDialog.click()
    await expect(getDialogContent).toBeVisible()

    const getMain = page.getByRole("main")
    await getMain.click({ position: { x: 0, y: 0 } })
    await expect(getDialogContent).not.toBeVisible()
  })
  test("Open and close Dialog with keyboard", async ({ page }) => {
    await page.goto("/e2e")

    const getOpenDialog = page.getByTestId("dialog-open")
    const getDialogContent = page.getByTestId("dialog-content")

    await expect(getOpenDialog).toBeVisible()
    await expect(getDialogContent).not.toBeVisible()

    await getOpenDialog.focus()
    await expect(getOpenDialog).toBeFocused()

    await getOpenDialog.press("Enter")
    await expect(getDialogContent).toBeVisible()

    const closeDialog = page.getByTestId("close-dialog")
    await expect(closeDialog).toBeFocused()

    await closeDialog.press("Enter")
    await expect(getDialogContent).not.toBeVisible()

    await getOpenDialog.press("Enter")
    await expect(getDialogContent).toBeVisible()

    await page.keyboard.press("Escape")
    await expect(getDialogContent).not.toBeVisible()
  })
})
