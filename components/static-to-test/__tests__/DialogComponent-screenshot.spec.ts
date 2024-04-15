import { expect, test } from "@playwright/test"
import path from "path"

test.describe("Screenshot Dialog", () => {
  test("Dialog is compared: component and content", async ({ page }) => {
    await page.goto("")

    let actualFileName = path.basename(__filename)

    const getDialogComponent = page.getByTestId("dialog-component")
    const getDialogContent = page.getByTestId("dialog-content")

    await expect(getDialogComponent).toHaveScreenshot([
      "./__screenshots__",
      `${actualFileName}-dialog-component.png`,
    ])

    const getDialogOpen = page.getByTestId("dialog-open")
    await getDialogOpen.click()

    await expect(getDialogContent).toHaveScreenshot([
      "./__screenshots__",
      `${actualFileName}-dialog-content.png`,
    ])
  })
})
