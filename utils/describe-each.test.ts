import { describe, expect, it } from "vitest"

describe.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])("describe object add($a, $b)", ({ a, b, expected }) => {
  it(`returns ${expected}`, () => {
    expect(a + b).toBe(expected)
  })

  it(`when sum ${a} + ${b} is not greater than ${expected}`, () => {
    expect(a + b).not.toBeGreaterThan(expected)
  })

  it(`when sum ${a} + ${b} is not less than ${expected}`, () => {
    expect(a + b).not.toBeLessThan(expected)
  })
})
