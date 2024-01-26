import { assertType, expect, expectTypeOf, test } from "vitest"

test("testing", (ctx) => {
  expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
  expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
  expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
  expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()
  // expect(1).toBe("string")

  const answer = 42

  assertType<number>(answer)
})

test("should work as expected", () => {
  expect(Math.sqrt(4)).toBe(2)
})
