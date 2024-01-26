import { describe, expect, it } from "vitest"

const input = Math.sqrt(4)

describe("group of tests", (ctx_describe) => {
  it("individual test ✅", (ctx) => {
    expect(input).to.equal(2) // chai API
    expect(input).toBe(2) // jest API

    expect(input).not.to.equal(99) // chai API
    expect(input).not.toBe(99) // jest API
  })

  it.skip("expect.soft test", () => {
    expect.soft(1 + 1).toBe("🟥 FAIL AND CONTINUE") // mark the test as fail and continue
    expect.soft(1 + 2).toBe("🟥 FAIL AND CONTINUE") // mark the test as fail and continue
  })

  it.skip("expect.soft test", () => {
    expect.soft(1 + 1).toBe("🟥 FAIL AND CONTINUE") // mark the test as fail and continue
    expect(1 + 2).toBe("🟥 FAIL AND STOP!!!!!!!!!!") // failed and terminate the test, all previous errors will be output
    expect.soft(1 + 3).toBe("THIS WILL NOT RUN 🔰") // do not run
  })
})
