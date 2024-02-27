import { cleanup, fireEvent, render, screen } from "@testing-library/react"
import { afterEach, describe, expect, it } from "vitest"
import { Calculator, equalSign, numbers, operations } from "./Calculator"

describe("Calculator", (ctx_describe) => {
  afterEach(cleanup)

  it("Should render", (ctx_it) => {
    render(<Calculator />)
  })

  it("Correct title", (ctx) => {
    render(<Calculator />)
    screen.getByText("Calculator")
  })

  it("should render numbers", (ctx) => {
    render(<Calculator />)
    numbers.forEach((x) => {
      screen.getByText(x)
    })
  })

  it("should render 4 rows", (ctx) => {
    render(<Calculator />)
    const rows = screen.getAllByRole("row")
    expect(rows).toHaveLength(4)
  })

  it("should render operation", (ctx) => {
    render(<Calculator />)
    operations.forEach((x) => {
      screen.getByText(x)
    })
  })

  it("should render equal sign", (ctx) => {
    render(<Calculator />)
    screen.getByText("=")
  })

  it("should render an input", (ctx) => {
    render(<Calculator />)
    screen.getByRole("textbox")
  })

  it("should user input after clicking a number", (ctx) => {
    render(<Calculator />)
    const one = screen.getByText("1")
    fireEvent.click(one)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("1")
  })

  it("should user input after clicking a several numbers", (ctx) => {
    render(<Calculator />)
    const one = screen.getByText("1")
    fireEvent.click(one)

    const two = screen.getByText("2")
    fireEvent.click(two)

    const three = screen.getByText("3")
    fireEvent.click(three)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("123")
  })

  it("should show user input after clicking numbers and operations", async (ctx) => {
    render(<Calculator />)
    /* const user = userEvent.setup() */

    const one = screen.getByText("1")
    fireEvent.click(one)
    /* await user.click(one) */

    const plus = screen.getByText("+")
    fireEvent.click(plus)
    fireEvent.click(one)
    /* await user.click(plus)
    await user.click(one) */

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("1+1")
  })

  it("should calculate based on user input and show the calculation", (ctx) => {
    render(<Calculator />)
    /* const user = userEvent.setup() */

    const one = screen.getByText("1")
    fireEvent.click(one)

    const plus = screen.getByText("+")
    fireEvent.click(plus)
    fireEvent.click(one)

    const equal = screen.getByText(equalSign)
    fireEvent.click(equal)

    const input = screen.getByRole("textbox")
    expect(input.value).toBe("2")
  })

  it.skip("every time the user click on some operation, the actual value should disappear after click on the next number", (ctx) => {
    // https://mathjs.org/
  })

  it.skip("should calculate based on user input, show the calculation and make a new operation after doing a first operation", (ctx) => {})
})
