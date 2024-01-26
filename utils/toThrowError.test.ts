import { expect, test } from "vitest"

function getFruitStock(type: string) {
  if (type === "pineapples") throw new Error("Pineapples are not in stock")

  // Do some other stuff
}

test("throws on pineapples", () => {
  // Test that the error message says "stock" somewhere: these are equivalent
  expect(() => getFruitStock("pineapples")).toThrowError(/stock/)
  expect(() => getFruitStock("pineapples")).toThrowError("stock")

  // Test the exact error message
  expect(() => getFruitStock("pineapples")).toThrowError(
    /^Pineapples are not in stock$/,
  )
})
