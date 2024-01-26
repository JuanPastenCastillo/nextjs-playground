import { describe, expect, it } from "vitest"

describe("toStrictEqual testing", () => {
  it("testing undefined on object", () => {
    const firstObj = { a: undefined, b: 2 }
    const secondObj = { b: 2 }

    expect(firstObj).not.toStrictEqual(secondObj)
    /* toEqual, not toStrictEqual */
    expect(firstObj).toEqual(secondObj)
  })

  it("testing undefined on arr", () => {
    const firstArr = [, 1]
    const secondArr = [undefined, 1]

    expect(firstArr).not.toStrictEqual(secondArr)
    /* toEqual, not toStrictEqual */
    expect(firstArr).toEqual(secondArr)
  })
})
