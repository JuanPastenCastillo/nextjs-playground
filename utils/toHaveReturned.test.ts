import { describe, expect, it, vi } from "vitest"

function getApplesPrice(amount: number) {
  const PRICE = 10
  return amount * PRICE
}

describe("spy function returned a value", () => {
  const getPriceSpy = vi.fn(getApplesPrice)

  const price = getPriceSpy(10)

  it("expect(price).toBe(100)", () => {
    expect(price).toBe(100)
  })

  it("expect(getPriceSpy).toHaveReturned()", (ctx) => {
    expect(getPriceSpy).toHaveReturned()
  })
})
