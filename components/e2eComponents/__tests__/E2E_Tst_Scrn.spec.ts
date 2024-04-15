import { expect, test } from "@playwright/test"
import * as path from "path"

test.describe("Screen", () => {
  test.use({
    locale: "fr-FR",
  })

  test("Index full page is saved: firefox, chromium, webkit", async ({
    page,
    browserName,
  }) => {
    await page.goto("")

    let actualFileName = path.basename(__filename)

    let options = {
      path: path.join(
        __dirname,
        ".",
        `${actualFileName}-full`,
        `${actualFileName}-${browserName}.png`,
      ),
      fullPage: true,
    }

    /*
     * In order to make this screenshot be save on firefox, chromium and webkit you need to use this command in your terminal:
     * npx playwright test --project webkit --project firefox --project chromium <file_that_have_the_screenshot>
     * Every --project <browser_name> is the browser where you are going to make the screenshot
     * This will create the folder: «E2E_Tst_Scrn.spec.ts-full» with the data of the screenshot inside
     
     * The method «await page.screenshot(options)» and «await expect(page).toHaveScreenshot(pathToMyScreenshot)» are different. So, do not try to make one depend on the other
     */
    await page.screenshot(options)
  })

  test("Scrn on index is compared", async ({ page }) => {
    await page.goto("")

    let actualFileName = path.basename(__filename)

    /*
     * (...) this path must stay within the snapshots directory for each test file (i.e. a.spec.js-snapshots), otherwise it will throw
     * Source: https://playwright.dev/docs/test-snapshots#updating-screenshots
     */
    let pathToMyScreenshot = ["./__screenshots__", `${actualFileName}.png`]

    /*
     * This will create the folder: «E2E_Tst_Scrn.spec.ts-snapshots» with folder «__screenshots__» inside that contain the screenshots for the three browsers: firefox, chromium and webkit
     * You only need to triger the normal test on the terminal, the very first time will throw an error because the folder and files doesn't exist, but the second time it should work
     * In order to prevent the first error you can run this command: «npx playwright test --update-snapshots "$1"» wheren "$1" is the name of the test file that have the method toHaveScreenshot
     
     * The method «await page.screenshot(options)» and «await expect(page).toHaveScreenshot(pathToMyScreenshot)» are different. So, do not try to make one depend on the other
     */

    await expect(page).toHaveScreenshot(pathToMyScreenshot)
  })
})
