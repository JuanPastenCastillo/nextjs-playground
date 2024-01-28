import { describe, expectTypeOf, it } from "vitest"

const firstVoid = (): void => {
  console.log("This returns nothing")
}

const checkingParams = (firstParam: number) => {
  return [firstParam, firstParam]
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

const checkingParamsOnPosition = (
  someString: string = "string",
  someNumber: number = 99,
  someBoolean: boolean = true,
  someObj: {} = {},
  someArr: [] = [],
  someUndefined: undefined = undefined,
  someNull: null = null,
  someNaN: typeof NaN = NaN,
  someANY: any = "whatever",
): checkingParamsOnPosition => {
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

describe("returns", (ctx_describe) => {
  it("return void", (ctx_it) => {
    expectTypeOf(() => {}).returns.toBeVoid()
    expectTypeOf(firstVoid).returns.toBeVoid()
  })

  it("return typeof based on position", (ctx) => {
    expectTypeOf((a: number) => [a, a]).returns.toEqualTypeOf([1, 2])
    expectTypeOf(checkingParams).returns.toEqualTypeOf([1, 2])
  })

  it("return typeof based on object", (ctx) => {
    expectTypeOf(
      checkingParamsObject,
    ).returns.toEqualTypeOf<CheckingParamsObject_Type>({
      someString: "string",
      someNumber: 99,
      someBoolean: true,
      someObj: {},
      someArr: [],
      someUndefined: undefined,
      someNull: null,
      someNaN: NaN,
      someANY: "whatever",
    })
  })

  it("return typeof based on position (arr)", (ctx) => {
    expectTypeOf(
      checkingParamsOnPosition,
    ).returns.toEqualTypeOf<checkingParamsOnPosition>([
      "string",
      99,
      true,
      {},
      [],
      undefined,
      null,
      NaN,
      "whatever",
    ])
  })
})
