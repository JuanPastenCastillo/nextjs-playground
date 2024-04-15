import { expect, test } from "@playwright/test"

test.describe("Testing Select HTML", () => {
  test("With  Array", async ({ page }) => {
    await page.goto("/e2e")

    const getListbox = page.getByRole("listbox")

    let dataToSelect: string[] = ["dog", "cat", "spider"]

    await getListbox.selectOption(dataToSelect)

    await page.pause()

    await expect(getListbox).toHaveValues(dataToSelect)
  })

  test("With Label", async ({ page }) => {
    await page.goto("/e2e")

    const getListbox = page.getByRole("listbox")

    let dataToSelect: { label: string } = { label: "Goldfish" }

    await getListbox.selectOption(dataToSelect)

    let toAssert = dataToSelect.label.toLowerCase()

    await expect(getListbox).toHaveValue(toAssert)
  })

  test("With String", async ({ page }) => {
    await page.goto("/e2e")

    const getListbox = page.getByRole("listbox")

    let dataToSelect: string = "Goldfish"

    await getListbox.selectOption(dataToSelect)

    let toAssert = dataToSelect.toLowerCase()

    await expect(getListbox).toHaveValue(toAssert)
  })
})
