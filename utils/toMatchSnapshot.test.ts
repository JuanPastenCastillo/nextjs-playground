import { expect, test } from "vitest"

test("matches snapshot strict", () => {
  const data = { foo: new Set(["bar", "snapshot"]) }
  expect(data).toMatchSnapshot()
})

test("matches snapshot only shape", () => {
  const data = { foo: new Set(["bar", "snapshot"]) }
  expect(data).toMatchSnapshot({ foo: expect.any(Set) })
})
