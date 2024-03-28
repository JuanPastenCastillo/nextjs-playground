/* 
In order to run this test you will need to install this: https://www.npmjs.com/package/csv-parse

*/

import { test } from "@playwright/test"
import { parse } from "csv-parse/sync"
import fs from "fs"
import path from "path"

const records = parse(fs.readFileSync(path.join(__dirname, "input.csv")), {
  columns: true,
  skip_empty_lines: true,
})

for (const record of records) {
  test(`foo: ${record.test_case}`, async ({ page }) => {
    console.log(record.test_case, record.some_value, record.some_other_value)
  })
}
