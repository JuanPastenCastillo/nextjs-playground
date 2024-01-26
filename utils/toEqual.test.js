import { expect, test } from "vitest"

const stockBill = {
  type: "apples",
  count: 13,
}

const stockMary = {
  type: "apples",
  count: 13,
}

// In Object check the properties
test("stocks have the same properties", () => {
  expect(stockBill).toEqual(stockMary)
})

// with toBe check the reference
test("stocks are not the same", () => {
  expect(stockBill).not.toBe(stockMary)
})

const firstArr = [10, 20, 99]
const secondArr = [10, 20, 99]

test("arrs have the same properties", () => {
  expect(firstArr).toEqual(secondArr)
})

// with toBe check the reference
test("arrs are not the same", () => {
  expect(firstArr).not.toBe(secondArr)
})
