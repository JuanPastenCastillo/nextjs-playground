import { describe, it, vi } from "vitest"

export function useRouter() {
  return {
    route: "/",
    pathname: "",
    query: "",
    asPath: "",
    push: vi.fn().mockResolvedValue(true),
    replace: vi.fn().mockResolvedValue(true),
    reload: vi.fn(),
    back: vi.fn(),
    prefetch: vi.fn(),
    beforePopState: vi.fn(),
    events: {
      on: vi.fn(),
      off: vi.fn(),
      emit: vi.fn(),
    },
    isFallback: false,
  }
}

describe.skip("Testing routes: ❌ Use E2E for this (playwright)", (ctx_describe) => {
  it("The user reach Dashboard", async (ctx_it) => {})
})
