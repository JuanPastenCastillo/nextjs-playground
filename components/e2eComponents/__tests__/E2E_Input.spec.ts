import { expect, test } from "@playwright/test"

const TODO_ITEMS = [
  "Fill with Playwright!!!",
  "buy some cheese",
  "feed the cat",
  "book a doctors appointment",
]

const textToSelect = "Hello, world!"
const textSelector = `text=${textToSelect}`

test.describe("Testing Fill with Inputs", () => {
  test("Text", async ({ page }) => {
    await page.goto("/e2e")

    const getInput = page.getByLabel("text")

    await expect(getInput).toBeDefined()

    await getInput.fill(TODO_ITEMS[0])
    await getInput.press("Enter")

    const theTextToFind = page.getByText(TODO_ITEMS[0])

    await expect(theTextToFind).toBeVisible()
    await expect(page.getByText(TODO_ITEMS[1])).not.toBeVisible()

    const getDataSubmitted = await page.getByTestId("data-submitted")
    await expect(getDataSubmitted).toBeVisible()
    await expect(getDataSubmitted).toHaveCount(1)
  })

  test("Date", async ({ page }) => {
    await page.goto("/e2e")

    const getInputDate = await page.getByLabel("date", { exact: true })
    await expect(getInputDate).toHaveAttribute("type", "date")
    await expect(getInputDate).toBeVisible()

    await getInputDate.fill("2020-02-02")

    await expect(getInputDate).toHaveValue("2020-02-02")
  })

  test("Local datetime", async ({ page }) => {
    await page.goto("/e2e")

    const getInputDate = await page.getByLabel("datetime-local", {
      exact: true,
    })
    await expect(getInputDate).toHaveAttribute("type", "datetime-local")
    await expect(getInputDate).toBeVisible()

    let inputLocalDatetimeValue = "2020-03-02T05:15"

    await getInputDate.fill(inputLocalDatetimeValue)

    await expect(getInputDate).toHaveValue(`${inputLocalDatetimeValue}`)
  })

  test("Time", async ({ page }) => {
    await page.goto("/e2e")

    const getInputDate = await page.getByLabel("time", {
      exact: true,
    })
    await expect(getInputDate).toHaveAttribute("type", "time")
    await expect(getInputDate).toBeVisible()

    let inputTimeValue = "13:15"

    await getInputDate.fill(inputTimeValue)

    await expect(getInputDate).toHaveValue(`${inputTimeValue}`)
  })

  test("Test content editable", async ({ page }) => {
    await page.goto("/e2e")
    await page.getByLabel("content-editable").click()
    await expect(page.getByLabel("content-editable")).toBeVisible()

    await page
      .getByLabel("content-editable")
      .fill(
        "Typed some words here, should work =) I'm using some \" quotes you know, this should break",
      )

    await expect(page.getByLabel("content-editable")).toContainText(
      "Typed some words here, should work =) I'm using some \" quotes you know, this should break",
    )
  })
})
