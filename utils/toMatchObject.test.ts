import { expect, test } from "vitest"

const johnInvoice = {
  isActive: true,
  customer: {
    first_name: "John",
    last_name: "Doe",
    location: "China",
  },
  total_amount: 5000,
  items: [
    {
      type: "apples",
      quantity: 10,
    },
    {
      type: "oranges",
      quantity: 5,
    },
  ],
}

const johnDetails = {
  customer: {
    first_name: "John",
    last_name: "Doe",
    location: "China",
  },
}

test("invoice has john personal details", () => {
  expect(johnInvoice).toMatchObject(johnDetails)
})

test("the number of elements must match exactly", () => {
  // Assert that an array of object matches
  expect([{ foo: "bar" }, { baz: 1 }]).toMatchObject([
    { foo: "bar" },
    { baz: 1 },
  ])
})

// This doesnt work because should be equal
test.skip("the number of elements must match exactly", () => {
  // Assert that an array of object matches
  expect
    .soft([{ foo: "bar_different" }, { baz: 1 }])
    .toMatchObject([{ foo: "bar" }, { baz: 1 }])
})
