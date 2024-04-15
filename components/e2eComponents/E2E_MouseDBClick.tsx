import { useState } from "react"

export const E2E_MouseDBClick = () => {
  const [clickState, setClickState] = useState(false)

  const handleClickMe = ({ e }: any) => {
    setClickState((prevState) => !prevState)
  }

  return (
    <>
      <button onDoubleClick={(event) => handleClickMe({ e: event })}>
        Click me
      </button>
      <p data-testid="dbclick-state">Click: {String(clickState)}</p>

      <button>Item</button>
    </>
  )
}
