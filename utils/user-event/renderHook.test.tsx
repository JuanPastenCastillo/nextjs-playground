import { cleanup, renderHook } from "@testing-library/react"
import { afterEach } from "node:test"
import { useEffect, useState } from "react"
import { describe, expect, it } from "vitest"

describe("renderHook examples", (ctx_describe) => {
  afterEach(cleanup)
  it("returns logged in user", () => {
    const { result, rerender } = renderHook(
      (props: { name?: string } = {}) => props,
      {
        initialProps: { name: "Alice" },
      },
    )
    expect(result.current).toEqual({ name: "Alice" })

    rerender()

    expect(result.current).toEqual({ name: undefined })
  })

  it("result inside renderHook will return the most recently committed value", (ctx) => {
    const { result } = renderHook(() => {
      const [name, setName] = useState("")
      useEffect(() => {
        setName("Alice")
      }, [])

      return name
    })

    // The final `result` is in `result.current` like a ref
    expect(result.current).toBe("Alice")
  })

  it("renderHook with rerender and new props", (ctx) => {
    const { result, rerender } = renderHook((props: {} = {}) => props, {
      initialProps: { name: "Alice" },
    })
    expect(result.current).toEqual({ name: "Alice" })
    rerender()
    expect(result.current).toEqual({ name: undefined })

    rerender({ name: "BOBY" })

    expect(result.current).toEqual({ name: "BOBY" })
  })
})
