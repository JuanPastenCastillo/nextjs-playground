/* 
❌ NOT WORKING → 15-01-2024
*/

import { bench, describe } from "vitest"

describe.todo("Should make the termination of the file <name-of-file>.bench.ts")

describe("sort", () => {
  bench("normal", () => {
    const x = [1, 5, 4, 2, 3]
    x.sort((a, b) => {
      return a - b
    })
  })

  bench("reverse", () => {
    const x = [1, 5, 4, 2, 3]
    x.reverse().sort((a, b) => {
      return a - b
    })
  })
})
