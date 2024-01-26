import { expect, it } from "vitest"

// Using an object
it.each([
  { a: 1, b: 1, expected: 2 },
  { a: 1, b: 2, expected: 3 },
  { a: 2, b: 1, expected: 3 },
])("add($a, $b) -> $expected", ({ a, b, expected }) => {
  expect(a + b).toBe(expected)
})

// this will return
// ✓ add(1, 1) -> 2
// ✓ add(1, 2) -> 3
// ✓ add(2, 1) -> 3

it.each([
  { a: 1, b: "letter", expected: "1letter" },
  { a: 1, b: "letter", expected: "1letter" },
  { a: 2, b: "letter", expected: "2letter" },
])("add($a, $b) -> $expected", ({ a, b, expected }) => {
  expect(a + b).toBe(expected)
})

/* 
  ✓ add(1, 'letter') -> '1letter'
  ✓ add(1, 'letter') -> '1letter'
  ✓ add(2, 'letter') -> '2letter'
*/

// Using an array
it.each([
  [1, 1, 2],
  [1, 2, 3],
  [2, 1, 3],
])("add(%i, %i) -> %i", (a, b, expected) => {
  expect(a + b).toBe(expected)
})

// this will return
// ✓ add(1, 1) -> 2
// ✓ add(1, 2) -> 3
// ✓ add(2, 1) -> 3
