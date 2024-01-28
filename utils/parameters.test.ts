import { describe, expectTypeOf, it } from "vitest"

type NoParam = () => void
type HasParam = (s: string) => void

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
  anotherOne: boolean
}

type ObjParam = ({
  someString,
  someNumber,
  someBoolean,
  someObj,
  someArr,
  someUndefined,
  someNull,
  someNaN,
  someANY,
}: CheckingParamsObject_Type) => void

type Type_PositionArr = [
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

type ArrParam = (
  someString: string,
  someNumber: number,
  someBoolean: boolean,
  someObj: {},
  someArr: [],
  someUndefined: undefined,
  someNull: null,
  someNaN: typeof NaN,
  someANY: any,
) => void

describe("Parameters", (ctx_describe) => {
  it("doc test", (ctx_it) => {
    expectTypeOf<NoParam>().parameters.toEqualTypeOf<[]>()
    expectTypeOf<HasParam>().parameters.toEqualTypeOf<[string]>()
  })

  it("doc test that should fail", (ctx_it) => {
    expectTypeOf<NoParam>().parameters.toEqualTypeOf<[]>()
    expectTypeOf<HasParam>().parameters.toEqualTypeOf<[string]>()
  })

  it("parameters based on object", (ctx) => {
    expectTypeOf<ObjParam>().parameters.toEqualTypeOf<
      [CheckingParamsObject_Type]
    >()
  })

  it("parameters based on arr", (ctx) => {
    expectTypeOf<ArrParam>().parameters.toEqualTypeOf<Type_PositionArr>()
  })
})
