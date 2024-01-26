import { expect, test } from "vitest"

function myAsyncFunc() {
  return new Promise((resolve) => resolve(1))
}

test.fails("fail test", async () => {
  await expect(myAsyncFunc()).rejects.toBe(2)
})
