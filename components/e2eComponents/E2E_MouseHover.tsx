import { useState } from "react"

export const E2E_MouseHover = () => {
  const [isHoverState, setIsHoverState] = useState(false)

  const handleEnter = (e: any) => {
    setIsHoverState(true)
  }

  const handleLeave = (e: any) => {
    setIsHoverState(false)
  }

  return (
    <>
      <button
        onMouseEnter={handleEnter}
        onMouseLeave={handleLeave}>
        Hover me
      </button>
      <p data-testid="mousehover-state">Mouse hover: {String(isHoverState)}</p>
    </>
  )
}
