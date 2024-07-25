import { expect, test } from "@playwright/test"
import * as path from "path"

test.describe("Screen", () => {
  test.use({
    locale: "fr-FR"
  })

  /* This test, with the "toHaveScreenshot" is the only one that can make a fullpage screnshots and compre it with the snapshot. With this, it make sense to apply this on the Github Actions  */
  test.only("Scrn on index is compared", async ({ page, browserName }) => {
    await page.goto("")

    const actualFileName = path.basename(__filename)

    const thePath = path.join(
      __dirname,
      ".",
      `${actualFileName}-full111`,
      "home",
      `${actualFileName}-${browserName}-home.png`
    )

    let options = {
      path: thePath,
      fullPage: true
    }

    /*
     * (...) this path must stay within the snapshots directory for each test file (i.e. a.spec.js-snapshots), otherwise it will throw
     * Source: https://playwright.dev/docs/test-snapshots#updating-screenshots
     */

    const optionsToHaveScreenshot = {
      fullPage: true,
      path: thePath,
      maxDiffPixels: 999 /* on "webkit" the difference of pixels are huge because for some reason webkit lift everything some pixels */
    }

    /*
     * This will create the folder: «E2E_Tst_Scrn.spec.ts-snapshots» with folder «__screenshots__» inside that contain the screenshots for the three browsers: firefox, chromium and webkit
     * You only need to triger the normal test on the terminal, the very first time will throw an error because the folder and files doesn't exist, but the second time it should work
     * In order to prevent the first error you can run this command: «npx playwright test --update-snapshots "$1"» wheren "$1" is the name of the test file that have the method toHaveScreenshot
     
     * The method «await page.screenshot(options)» and «await expect(page).toHaveScreenshot(pathToMyScreenshot)» are different. So, do not try to make one depend on the other
     */

    await page.screenshot(options)

    await expect(page).toHaveScreenshot(optionsToHaveScreenshot)
  })

  test.only("Scrn on ORG is compared", async ({ page, browserName }) => {
    await page.goto("/ORG")

    const actualFileName = path.basename(__filename)

    const thePath = path.join(
      __dirname,
      ".",
      `${actualFileName}-full111`,
      "org",
      `${actualFileName}-${browserName}-org.png`
    )

    let options = {
      path: thePath,
      fullPage: true
    }

    /*
     * (...) this path must stay within the snapshots directory for each test file (i.e. a.spec.js-snapshots), otherwise it will throw
     * Source: https://playwright.dev/docs/test-snapshots#updating-screenshots
     */

    const optionsToHaveScreenshot = {
      fullPage: true,
      path: thePath,
      maxDiffPixels: 999 /* on "webkit" the difference of pixels are huge because for some reason webkit lift everything some pixels */
    }

    /*
     * This will create the folder: «E2E_Tst_Scrn.spec.ts-snapshots» with folder «__screenshots__» inside that contain the screenshots for the three browsers: firefox, chromium and webkit
     * You only need to triger the normal test on the terminal, the very first time will throw an error because the folder and files doesn't exist, but the second time it should work
     * In order to prevent the first error you can run this command: «npx playwright test --update-snapshots "$1"» wheren "$1" is the name of the test file that have the method toHaveScreenshot
     
     * The method «await page.screenshot(options)» and «await expect(page).toHaveScreenshot(pathToMyScreenshot)» are different. So, do not try to make one depend on the other
     */

    await page.screenshot(options)

    await expect(page).toHaveScreenshot(optionsToHaveScreenshot)
  })

  test.skip("Index full page is saved: firefox, chromium, webkit", async ({
    page,
    browserName
  }) => {
    test.info().annotations.push({
      type: "screenshot of full page on some image",
      description: `By defaullt just trigger this test is going to make it on chromium, firefox and webkit (because the «playwright.config.ts» on the key «projects») but if you want to really be sure that this test is going to be trigger on those browsers, you can run this command: «npx playwright test --project webkit --project firefox --project chromium <file_that_have_the_screenshot>» where "firefox", "chromium" and "webkit" are the browser names and <file_that_have_the_screenshot> is the name of the test file that have the method «page.screenshot(options)»`
    })
    await page.goto("")

    let actualFileName = path.basename(__filename)

    let options = {
      path: path.join(
        __dirname,
        ".",
        `${actualFileName}-full`,
        `${actualFileName}-${browserName}.png`
      ),
      fullPage: true
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

  test.skip("Check with fullPage", async ({ page, browserName }) => {
    await page.goto("")

    const actualFileName = path.basename(__filename)

    const screenshotPath = path.join(
      "./__screenshots__",
      "full",
      `${actualFileName}.png`
    )

    const actualOptionsSnapshot = {
      maxDiffPixels: 15,
      path: screenshotPath,
      fullPage: true,
      name: "E2E_Tst_Scrn.spec-toMatchSnapshot"
    }

    const screenshot = await page.screenshot({ fullPage: true })

    await expect(screenshot).toMatchSnapshot(actualOptionsSnapshot)

    // await expect(page).toHaveScreenshot(screenshotPath)
  })
})
