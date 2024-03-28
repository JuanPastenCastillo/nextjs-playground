/* 
* # Two ways this work

* ## Number 1:

  In other to make this work, you should make something like this in the CLI:
  
  USER=USER_1 PASS=PASS_2 npm playwright test
  
  <ENV_KEY>=<ENV_VALUE> <ENV2_KEY>=<ENV2_VALUE> <CALL_PLAYWRIGHT_TEST>

* ## Number 2:

  - Install the «dotenv» package: npm install --save-dev dotenv
  - Use the dotenv package like this:
    + dotenv.config() // Read from default ".env" file OR
    + dotenv.config({ path: ".env.local" }) // Alternatively, read from "../my.env" file.
  - Just run the test as always: npm playwright test || <command_from_package.json>

*/

import { expect, test } from "@playwright/test"

test.describe("Testing with environment variables", () => {
  test("Check this out!", async ({ page }) => {
    await expect("USER_1").toBe(process.env.USER)
    await expect("PASS_2").toBe(process.env.PASS)
  })
})
