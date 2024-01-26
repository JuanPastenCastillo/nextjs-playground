import { expect, test } from "vitest"

const getAllFruits = () => {
  return ["orange", "banana", "apple"]
}
const getAllFruits2 = () => {
  return "orange"
}

const getAllFruits3 = () => {
  return "this is sentence and have the word orange"
}

const getAllFruits4 = () => {
  return "this is sentence and have the wordorange but is weird"
}

const getAllFruits5 = () => {
  return "this is sentence and have the wordoran ge but is weird"
}

test("Arr contain orange", () => {
  expect(getAllFruits()).toContain("orange")
})

test("String contain orange", () => {
  expect(getAllFruits2()).toContain("orange")
})

test("Sentence contain orange", () => {
  expect(getAllFruits3()).toContain("orange")
})

test("Weird sentence contain orange", () => {
  expect(getAllFruits4()).toContain("orange")
})

// This fail
test.skip("Weird sentence contain orange but like this: «oran ge»", () => {
  expect(getAllFruits5()).toContain("orange")
})
