/* 
❌ NOT WORKING → 15-01-2024
*/

import { assertType, expectTypeOf, test } from "vitest"
import { mount } from "./mount.js"

test.skip("my types work properly", () => {
  expectTypeOf(mount).toBeFunction()
  // expectTypeOf(mount).parameter(0).toMatchTypeOf<{ name: string }>()

  // @ts-expect-error name is a string
  assertType(mount({ name: 42 }))
})
