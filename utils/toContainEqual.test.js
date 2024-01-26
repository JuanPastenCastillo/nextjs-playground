import { expect, test } from "vitest"

const getAllFruits = () => {
  return ["banana", "apple", "orange"]
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
  expect(getAllFruits()).toContainEqual("orange")
})

// Dont work because what we want to know should be in a arr
test.skip("String contain orange", () => {
  expect(getAllFruits2()).toContainEqual("orange")
})

// Dont work because what we want to know should be in a arr
test.skip("Sentence contain orange", () => {
  expect(getAllFruits3()).toContainEqual("orange")
})

// Dont work because what we want to know should be in a arr
test.skip("Weird sentence contain orange", () => {
  expect(getAllFruits4()).toContainEqual("orange")
})

// This fail
test.skip("Weird sentence contain orange but like this: «oran ge»", () => {
  expect(getAllFruits5()).toContainEqual("orange")
})
