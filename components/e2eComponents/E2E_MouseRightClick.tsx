import { useState } from "react"

export const E2E_MouseRightClick = () => {
  const [clickState, setClickState] = useState(false)

  const handleOnContextMenu = (e: any) => {
    if (e.button === 2) {
      e.preventDefault()
      setClickState((prevState) => !prevState)
    }
  }

  return (
    <>
      <button onContextMenu={handleOnContextMenu}>Click me: right</button>
      <p data-testid="rightclick-state">Click: {String(clickState)}</p>

      <button>Item</button>
    </>
  )
}
