import { expect, test } from "vitest"

const invoice = {
  isActive: true,
  "P.O": "12345",
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

test("John Doe Invoice", () => {
  expect(invoice).toHaveProperty("isActive") // assert that the key exists
  expect(invoice).toHaveProperty("total_amount", 5000) // assert that the key exists and the value is equal

  expect(invoice).not.toHaveProperty("account") // assert that this key does not exist

  // Deep referencing using dot notation
  expect(invoice).toHaveProperty("customer.first_name")
  expect(invoice).toHaveProperty("customer.last_name", "Doe")
  expect(invoice).not.toHaveProperty("customer.location", "India")

  // Deep referencing using an array containing the key
  expect(invoice).toHaveProperty("items[0].type", "apples")
  expect(invoice).toHaveProperty("items.0.type", "apples") // dot notation also works

  // Deep referencing using an array containing the keyPath
  expect(invoice).toHaveProperty(["items", 0, "type"], "apples")
  expect(invoice).toHaveProperty(["items", "0", "type"], "apples") // string notation also works

  // Wrap your key in an array to avoid the key from being parsed as a deep reference
  expect(invoice).toHaveProperty(["P.O"], "12345")
})
