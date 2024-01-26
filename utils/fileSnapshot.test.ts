import { expect, it } from "vitest"
import { uppercase } from "./uppercase"

it("render basic", async () => {
  let toUpperCaseResult = uppercase({
    theString: "Some String, it work? is differente =). Some changes here...",
  })
  await expect(
    `let toUpperCaseResult = "${toUpperCaseResult}"`,
  ).toMatchFileSnapshot("./test/upperCaseSnapshot.output.ts")
})
