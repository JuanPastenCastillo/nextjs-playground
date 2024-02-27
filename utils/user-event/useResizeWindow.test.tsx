import { renderHook } from "@testing-library/react"
import { beforeEach, describe, expect, it, vi } from "vitest"
import { useMediaQuery } from "./useResizeWindow"

const toUseWindow = () => {
  return (window.matchMedia = vi.fn().mockImplementation(
    (
      query,
    ): {
      matches: boolean
      addEventListener: () => void
      removeEventListener: () => void
    } => {
      return {
        matches: query === "(max-width: 1085px)", // Simulate the behavior based on the query
        addEventListener: vi.fn(),
        removeEventListener: vi.fn(),
      }
    },
  ))
}

describe("Testing resize window", (ctx_describe) => {
  beforeEach(() => {
    toUseWindow()
  })

  it("should return true for mobile view", () => {
    // Render a component that uses the custom hook with a specific query

    const { result } = renderHook(() =>
      useMediaQuery({ query: "(max-width: 1085px)" }),
    )

    // Assert that the hook returns true for mobile view
    expect(result.current).toBe(true)
  })

  it("should return false for mobile view", () => {
    // Render a component that uses the custom hook with a specific query

    const { result } = renderHook(() =>
      useMediaQuery({ query: "(max-width: 1086px)" }),
    )

    // Assert that the hook returns true for mobile view
    expect(result.current).toBe(false)
  })
})
