import AxeBuilder from "@axe-core/playwright"
import { expect, test } from "@playwright/test"

test.describe("Testing Accessibility", () => {
  test.skip("Website without detectables accessibility issues", async ({
    page,
  }, testInfo) => {
    await page.goto("https://coral-app-8f8yp.ondigitalocean.app/")

    const accessibilityScanResults = await new AxeBuilder({ page }).analyze()

    await testInfo.attach("accessibility-scan-results", {
      body: JSON.stringify(accessibilityScanResults, null, 2),
      // contentType: "application/json",
      // path: "./e2e2",
    })

    expect(accessibilityScanResults.violations).toEqual([])
  })

  test.skip("Website without detectables accessibility issues + withTags", async ({
    page,
  }) => {
    await page.goto("https://coral-app-8f8yp.ondigitalocean.app/")

    const accessibilityScanResults = await new AxeBuilder({ page })
      .withTags(["wcag2a", "wcag2aa", "wcag21a", "wcag21aa"])
      .analyze()

    expect(accessibilityScanResults.violations).toEqual([])
  })
})
