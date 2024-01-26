import { expect, it } from "vitest"
import { sum } from "./sum"

it("adds 1 + 2 to equal 3", (ctx) => {
  expect(sum({ first: 1, second: 2 })).toBe(3)
}, 10)
