import { expect, it } from "vitest"
import { uppercase } from "./uppercase"

it("toUpperCase with snapshot", async (ctx) => {
  console.log("ctx:", ctx.skip())
  let toUpperCaseResult = uppercase({
    theString: "Some String, it work? is differente =)",
  })

  expect(toUpperCaseResult).toMatchInlineSnapshot(
    `"SOME STRING, IT WORK? IS DIFFERENTE =)"`,
  )
  /* await expect(toUpperCaseResult).toMatchFileSnapshot(
    `./test/toUpperCase_work.output.ts"`,
  ) */
})
