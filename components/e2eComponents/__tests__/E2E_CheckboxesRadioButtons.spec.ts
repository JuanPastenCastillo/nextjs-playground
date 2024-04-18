import { expect, test } from "@playwright/test"

test.describe(`Testing Checkboxes and Radio Buttons`, () => {
  test("Checkbox", async ({ page }) => {
    await page.goto("/e2e")

    let theCheckbox_1 = page.getByLabel("Checkbox button", { exact: true })
    await theCheckbox_1.check()
    await expect(theCheckbox_1).toBeChecked()

    await theCheckbox_1.setChecked(false)
    await expect(theCheckbox_1).not.toBeChecked()

    await theCheckbox_1.check()
    await expect(theCheckbox_1).toBeChecked()

    await theCheckbox_1.uncheck()
    await expect(theCheckbox_1).not.toBeChecked()

    let theCheckbox_2 = page.getByLabel("Another Checkbox button", {
      exact: true,
    })
    await theCheckbox_2.check()
    await expect(theCheckbox_2).toBeChecked()

    await theCheckbox_2.setChecked(false)
    await expect(theCheckbox_2).not.toBeChecked()

    await theCheckbox_2.check()
    await expect(theCheckbox_2).toBeChecked()

    await theCheckbox_2.uncheck()
    await expect(theCheckbox_2).not.toBeChecked()
  })

  test("Radio", async ({ page }) => {
    await page.goto("/e2e")

    let labelRadioButton_1 = page.getByLabel("Radio button 1")
    let labelRadioButton_2 = page.getByLabel("Radio button 2")

    await labelRadioButton_1.check()
    await expect(labelRadioButton_1).toBeChecked()
    await expect(labelRadioButton_2).not.toBeChecked()

    await labelRadioButton_2.check()
    await expect(labelRadioButton_1).not.toBeChecked()
    await expect(labelRadioButton_2).toBeChecked()

    await labelRadioButton_1.setChecked(true)
    await expect(labelRadioButton_1).toBeChecked()
    await expect(labelRadioButton_2).not.toBeChecked()

    await labelRadioButton_2.setChecked(true)
    await expect(labelRadioButton_1).not.toBeChecked()
    await expect(labelRadioButton_2).toBeChecked()
  })
})
