import { expect, test } from "vitest"

test("top fruits", () => {
  expect("top fruits include apple, orange and grape").toMatch(/apple/)
  expect("applefruits").toMatch("fruit") // toMatch also accepts a string
})
