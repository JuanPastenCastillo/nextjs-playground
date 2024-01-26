import { expect, it } from "vitest"

function isValidParam(param: "" | null) {
  return !(param === "" || param === null)
}

const textToThrow = "Parameter must be more than one primitive"

function testFunction(param: any) {
  if (!isValidParam(param)) {
    throw new Error(textToThrow)
  }

  return "IS OKAY!, this is a string"
}

it("test testFunction with valid parameters", () => {
  expect(() => testFunction("hello")).not.toThrow()
  expect(() => testFunction(42)).not.toThrow()
})

it("test testFunction with invalid parameters", () => {
  expect(() => testFunction("")).toThrow(textToThrow)
  expect(() => testFunction(null)).toThrow(textToThrow)
})

it("Should pass", () => {
  expect(testFunction(99)).toBeTypeOf("string")
})
