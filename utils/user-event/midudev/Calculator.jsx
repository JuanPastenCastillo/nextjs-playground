import { evaluate } from "mathjs"
import { useState } from "react"

export const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

const rows = [[7, 8, 9], [4, 5, 6], [1, 2, 3], [0]]

export const operations = ["+", "-", "*", "/"]
export const equalSign = "="

export const Calculator = () => {
  const [value, setValue] = useState("")

  const createHandleClick = ({ operation }) => {
    console.log("value:", value)

    setValue(String(value).concat(operation))
  }

  return (
    <section>
      <h1>Calculator</h1>

      <input
        value={value}
        readOnly
      />

      <div role="grid">
        {rows.map((xRow, idx) => {
          return (
            <div
              role="row"
              key={idx}>
              {xRow.map((number) => (
                <button
                  onClick={() => createHandleClick({ operation: number })}
                  key={number}>
                  {number}
                </button>
              ))}
            </div>
          )
        })}

        {operations.map((x) => {
          return (
            <button
              key={x}
              onClick={() => createHandleClick({ operation: x })}>
              {x}
            </button>
          )
        })}
        <span onClick={() => setValue(evaluate(value))}>{equalSign}</span>
      </div>
    </section>
  )
}
