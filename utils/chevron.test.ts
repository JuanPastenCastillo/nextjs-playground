import { expect, test } from "vitest"

test("toThrowErrorMatchingSnapshot", () => {
  expect(() => {
    throw new Error("error")
  }).toThrowErrorMatchingSnapshot("hint")
})

test("snapshot", () => {
  expect(new Error("error")).toMatchInlineSnapshot(`[Error: error]`)

  expect(() => {
    throw new Error("error")
  }).toThrowErrorMatchingInlineSnapshot(`[Error: error]`)
})
