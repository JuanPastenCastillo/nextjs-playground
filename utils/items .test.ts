import { describe, expectTypeOf, it } from "vitest"

type checkingParamsOnPosition =
  | string
  | number
  | boolean
  | {}
  | []
  | undefined
  | null
  | typeof NaN
  | any

const theArr = ["string", 99, true, {}, [], undefined, null, NaN, "whatever"]

describe("Items tests", (ctx_describe) => {
  it("Doc test", (ctx_it) => {
    expectTypeOf([1, 2, 3]).items.toEqualTypeOf<number>()
    expectTypeOf([1, 2, 3]).items.not.toEqualTypeOf<string>()
  })

  it("Testing types", (ctx) => {
    expectTypeOf(["string", 99]).items.toEqualTypeOf<string | number>()
  })

  it("Testing types", (ctx) => {
    expectTypeOf([
      "string",
      99,
      true,
      undefined,
      null,
      ["string"],
    ]).items.toEqualTypeOf<
      string | number | boolean | undefined | null | string[]
    >()
  })
})
