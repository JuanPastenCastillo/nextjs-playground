import { defineConfig, devices } from "@playwright/test"
import dotenv from "dotenv"
const fs = require("fs-extra")
const path = require("path")

/**
 * Read environment variables from file.
 * https://github.com/motdotla/dotenv
 */

// Read from default ".env" file.
// dotenv.config()

// Alternatively, read from "../my.env" file.
// dotenv.config({ path: path.resolve(__dirname, "..", ".env.local") })
dotenv.config({ path: ".env.local" })

const PORT = process.env.PORT || 3000
const BASE_URL = process.env.BASE_URL || `http://localhost:${PORT}`
export default defineConfig({
  outputDir: "./e2e/test-results",

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code */
  // forbidOnly: !!process.env.CI,

  /* Give failing tests 1 retry attempts */
  retries: 1,

  /* Opt out of parallel tests on CI */
  workers: process.env.CI ? 1 : undefined,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: process.env.CI
    ? "github"
    : [
        // https://playwright.dev/docs/test-reporters#html-reporter
        [
          "html",
          {
            outputFolder: "./e2e/playwright-report",
            outputDir: "./e2e/test-results"
          }
        ]

        // https://playwright.dev/docs/test-reporters#list-reporter
        /* ["list", { printSteps: true }], */
        // https://playwright.dev/docs/test-reporters#dot-reporter
        /* ["dot"] */
      ],

  testIgnore: ["*/*.test.ts", "*/*.test.tsx", "*/*.test.js", "*/*.test.jsx"],
  testMatch: ["*/*.spec.ts", "*/*.list.ts"],

  expect: {
    /* This is the default actually. See for more details: https://playwright.dev/docs/test-configuration#expect-options */
    timeout: 5000
  },

  // snapshotPathTemplate: "{testFileDir}",

  /* In Continuous Integration globalTimeout is 15 minutes, in local is 30 minutes. See more detials: https://playwright.dev/docs/test-timeouts#global-timeout */
  globalTimeout: process.env.CI ? 15 * 60 * 1000 : 15 * 60 * 1000,

  /* Shared settings for all the projects below. See https://playwright.dev/docs/api/class-testoptions. */
  use: {
    /* Base URL to use in actions like `await page.goto('/')`. */
    // baseURL: 'http://127.0.0.1:3000',
    baseURL: BASE_URL,

    /* Collect trace when retrying the failed test. See https://playwright.dev/docs/trace-viewer */
    trace: "on-first-retry"
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: "chromium",
      use: { ...devices["Desktop Chrome"] }
    },

    {
      name: "firefox",
      use: { ...devices["Desktop Firefox"] }
    },

    {
      name: "webkit",
      use: { ...devices["Desktop Safari"] }
    }

    // Test against mobile viewports.
    /* {
      name: 'Mobile Chrome',
      use: { ...devices['Pixel 5'] },
    },
    {
      name: 'Mobile Safari',
      use: { ...devices['iPhone 12'] },
    }, */

    // Test against branded browsers.
    /* {
      name: 'Microsoft Edge',
      use: { ...devices['Desktop Edge'], channel: 'msedge' },
    },
    {
      name: 'Google Chrome',
    use: { ...devices['Desktop Chrome'], channel: 'chrome' },
    }, */
  ],

  webServer: process.env.CI
    ? undefined
    : {
        command: `npm run dev`,
        url: BASE_URL,
        timeout: 120 * 1000,
        reuseExistingServer: true
      }
  /* Run your local dev server before starting the tests */
})
