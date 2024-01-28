import { describe, expectTypeOf, it } from "vitest"

function foo(a: number, b: string) {
  return [a, b]
}

type CheckingParamsObject_Type = {
  someString: string
  someNumber: number
  someBoolean: boolean
  someObj: {}
  someArr: []
  someUndefined: undefined
  someNull: null
  someNaN: typeof NaN
  someANY: any
}

const checkingParamsObject = ({
  someString,
  someNumber,
  someBoolean,
  someObj,
  someArr,
  someUndefined,
  someNull,
  someNaN,
  someANY,
}: CheckingParamsObject_Type) => {
  let allData = {
    someString,
    someNumber,
    someBoolean,
    someObj,
    someArr,
    someUndefined,
    someNull,
    someNaN,
    someANY,
  }

  return allData
}

type checkingParamsOnPosition = [
  string,
  number,
  boolean,
  {},
  [],
  undefined,
  null,
  typeof NaN,
  any,
]

function checkingParamsOnPosition(
  someString: string,
  someNumber: number,
  someBoolean: boolean,
  someObj: {},
  someArr: [],
  someUndefined: undefined,
  someNull: null,
  someNaN: typeof NaN,
  someANY: any,
) {
  return [
    someString,
    someNumber,
    someBoolean,
    someObj,
    someArr,
    someUndefined,
    someNull,
    someNaN,
    someANY,
  ]
}

describe("parameter sigle test", (ctx_describe) => {
  it("docs test", (ctx_it) => {
    expectTypeOf(foo).parameter(0).toBeNumber()
    expectTypeOf(foo).parameter(1).toBeString()
    expectTypeOf(foo).parameter(1).not.toBeNull()
  })

  it("parameter obj", (ctx) => {
    expectTypeOf(checkingParamsObject).parameter(0).toBeObject()
  })

  it("parameters on position", (ctx) => {
    expectTypeOf(checkingParamsOnPosition).parameter(0).toBeString()
    expectTypeOf(checkingParamsOnPosition).parameter(1).toBeNumber()
  })
})
