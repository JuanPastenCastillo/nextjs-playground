import { expect, test } from "vitest"

test("toHaveLength", () => {
  expect("abc").toHaveLength(3)
  expect([1, 2, 3]).toHaveLength(3)

  expect("").not.toHaveLength(3) // doesn't have .length of 3
  expect({ length: 3 }).toHaveLength(3)
})
