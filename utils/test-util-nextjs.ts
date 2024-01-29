import { vi } from "vitest"

export const nextJSRoutesFix = (): void => {
  vi.mock("next/navigation", async () => {
    const actual = await vi.importActual("next/navigation")
    return {
      ...actual,
      useRouter: vi.fn(() => ({
        push: vi.fn(),
        replace: vi.fn(),
      })),
      useSearchParams: vi.fn(() => ({
        // get: vi.fn(),
      })),
      usePathname: vi.fn(),
    }
  })
  vi.mock("next/router", async () => {
    const actual = await vi.importActual("next/router")
    return {
      ...actual,
      useRouter: vi.fn(() => ({
        push: vi.fn(),
        replace: vi.fn(),
      })),
      useSearchParams: vi.fn(() => ({
        // get: vi.fn(),
      })),
      usePathname: vi.fn(),
    }
  })
}
