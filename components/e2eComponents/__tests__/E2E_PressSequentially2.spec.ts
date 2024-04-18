import { expect, test } from "@playwright/test"

test.describe("Testing with page", () => {
  test("go to, is showed", async ({ page }) => {
    await page.goto("/e2e")

    const getInput = await page.getByTestId("input-sequentially")

    await getInput.pressSequentially("Hi!")

    await expect(getInput).toHaveValue("Hi!")

    await getInput.fill("bye =(")
    await expect(getInput).toHaveValue("bye =(")
  })
})
