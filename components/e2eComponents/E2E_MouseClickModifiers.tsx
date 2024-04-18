import { useState } from "react"

/* This match the modifiers of Playwright and  */
export const enum MODIFIERS {
  "Alt" = "altKey",
  "Control" = "ctrlKey",
  "Meta" = "metaKey",
  "Shift" = "shiftKey",
}

const handleState = (e: any, stateToSet: any) => {
  if (
    !e[MODIFIERS["Alt"]] &&
    !e[MODIFIERS["Control"]] &&
    !e[MODIFIERS["Meta"]] &&
    !e[MODIFIERS["Shift"]]
  ) {
    stateToSet(false)
    return
  }

  if (e[MODIFIERS["Alt"]]) {
    stateToSet(MODIFIERS["Alt"])
    return
  }

  if (e[MODIFIERS["Control"]]) {
    stateToSet(MODIFIERS["Control"])
    return
  }

  if (e[MODIFIERS["Shift"]]) {
    stateToSet(MODIFIERS["Shift"])
    return
  }

  if (e[MODIFIERS["Meta"]]) {
    stateToSet(MODIFIERS["Meta"])
    return
  }
}

export const E2E_MouseClickModifiers = () => {
  const [clickState, setClickState] = useState<boolean | string>(false)

  const handleOnContextMenu = (e: any) => {
    if (e.type === "contextmenu") {
      e.preventDefault()
      e.stopPropagation()
    }

    let isRightClick = e.button === 2

    if (isRightClick) {
      handleState(e, setClickState)
    }
  }

  const [onClickState, setOnClickState] = useState<boolean | string>(false)

  const handleClick = (e: any) => {
    handleState(e, setOnClickState)
  }

  return (
    <>
      <button
        onContextMenu={handleOnContextMenu}
        onAuxClick={handleOnContextMenu}
        onClick={handleClick}>
        Click me: M
      </button>
      <p data-testid="rightclick-state">Click with: {String(clickState)}</p>
      <p data-testid="onclick-state">Click with: {String(onClickState)}</p>
    </>
  )
}
