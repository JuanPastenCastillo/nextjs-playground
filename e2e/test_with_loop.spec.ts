import test, { expect } from "@playwright/test"

const people: string[] = ["Alice", "Bob"]
for (const name of people) {
  test(`testing with ${name}`, async () => {
    await expect(name).toBeDefined()
    console.log("watched?!")
  })
  // You can also do it with test.describe() or with multiple tests as long the test name is unique.
}
