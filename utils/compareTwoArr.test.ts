import { describe, expect, expectTypeOf, it } from "vitest"
import { compareTwoArr } from "./compareTwoArr"

describe(`Testing function «${compareTwoArr.name}»`, (ctx_describe) => {
  it(`«${compareTwoArr.name}» is a function`, (ctx_it) => {
    expectTypeOf(compareTwoArr).toBeFunction
  })

  it(`«${compareTwoArr.name}» returns a boolean`, (ctx) => {
    expectTypeOf(compareTwoArr).returns.toBeBoolean()
  })

  it("Not valid parameters", (ctx) => {
    const isNotValid_Arr = compareTwoArr({
      realDataFromUI: [],
      dataToCompare: [],
    })

    expect(isNotValid_Arr).toBeFalsy()
  })

  it("valid parameters, return true", (ctx) => {
    type Type_ArrExpected = string[]
    const firstArr: Type_ArrExpected = ["first element", "second element"]
    const secondArr: Type_ArrExpected = ["second Element", "first Element"]

    const isNotValid_Arr = compareTwoArr({
      realDataFromUI: firstArr,
      dataToCompare: secondArr,
    })

    expect(isNotValid_Arr).toBeTruthy()
  })

  it("parameters doesn't match in the content", (ctx) => {
    type Type_ArrExpected = string[]

    const firstArr: Type_ArrExpected = ["1 element", "2 element"]
    const secondArr: Type_ArrExpected = ["other thing", "anything else?"]

    const isNotValid_Arr = compareTwoArr({
      realDataFromUI: firstArr,
      dataToCompare: secondArr,
    })

    expect(isNotValid_Arr).toBeFalsy()
  })

  it("parameters doesn't match in their length", (ctx) => {
    type Type_ArrExpected = string[]

    const firstArr: Type_ArrExpected = ["1 element", "2 element"]
    const secondArr: Type_ArrExpected = ["1 element", "2 element", "3 element"]

    const isNotValid_Arr = compareTwoArr({
      realDataFromUI: firstArr,
      dataToCompare: secondArr,
    })

    expect(isNotValid_Arr).toBeFalsy()
  })
})
