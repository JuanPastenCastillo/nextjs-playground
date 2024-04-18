import { useState } from "react"

export const E2E_MouseClick = () => {
  const [clickState, setClickState] = useState(false)

  const handleClickMe = ({ e }: any) => {
    setClickState((prevState) => !prevState)
  }

  return (
    <>
      <button onClick={(event) => handleClickMe({ e: event })}>Click me</button>
      <p data-testid="click-state">Click: {String(clickState)}</p>

      <button>Item</button>
    </>
  )
}
