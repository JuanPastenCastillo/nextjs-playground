import { render, screen } from "@testing-library/react"
import { expect, test } from "vitest"
import { INDEX_FromDocs } from "../INDEX_FromDocs"

test("Page", () => {
  render(<INDEX_FromDocs />)

  expect(
    screen.getByRole("heading", { level: 1, name: "INDEX_FromDocs" }),
  ).toBeDefined()
})
