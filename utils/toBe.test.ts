import { expect, expectTypeOf, it } from "vitest"

const stock = {
  type: "apples",
  count: 13,
  pretty: true,
}

it("typeof stock", (ctx) => {
  // console.log("ctx:", ctx)
  expectTypeOf({ type: stock.type }).toEqualTypeOf<{ type: string }>()
  expectTypeOf(stock.type).toEqualTypeOf<string>()

  expect(stock.type).toBeTypeOf("string")
})

it("All properties on stock", () => {
  expect(stock.type).toBe("apples")
  expect(stock.count).toBe(13)
  expect(stock.pretty).toBe(true)
  expect(stock.pretty).not.toBe(false)
})

it("stocks are the same", () => {
  const refStock = stock // same reference

  expect(stock).toBe(refStock)
})
