import { describe, expectTypeOf, it } from "vitest"

describe("toEqualTypeOf ", (ctx_describe) => {
  it("Testing it", (ctx_it) => {
    expectTypeOf({ a: 1 }).toEqualTypeOf<{ a: number }>()
    expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 1 })
    expectTypeOf({ a: 1 }).toEqualTypeOf({ a: 2 })
    expectTypeOf({ a: 1, b: 1 }).not.toEqualTypeOf<{ a: number }>()

    expectTypeOf({ a: "string" }).toEqualTypeOf<{ a: string }>()
  })
})
