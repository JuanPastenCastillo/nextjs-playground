import { expect, test, vi } from "vitest"

const market = {
  buy(subject: string, amount: number) {
    // ...
  },
}

test("spy function", () => {
  const buySpy = vi.spyOn(market, "buy")

  expect(buySpy).not.toHaveBeenCalled()

  market.buy("apples", 10)

  expect(buySpy).toHaveBeenCalled()
})
