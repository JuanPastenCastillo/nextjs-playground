import { useState } from "react"

export const TextArea_Editor = () => {
  const [changeState, setChangeState] = useState("")
  const [actualSelection, setActualSelection] = useState("")

  const handleChangeState = ({ event }) => {
    setChangeState(event.target.innerHTML)
  }

  const handleOnSelect = ({ e }) => {
    const selection = e.target.value.substring(
      e.target.selectionStart,
      e.target.selectionEnd,
    )
    setActualSelection(selection)

    // Highlight the selected text
    const highlightedText = `<span class="highlight">${selection}</span>`
    const newText = e.target.innerHTML.replace(selection, highlightedText)
    setChangeState(newText)
  }

  return (
    <div>
      <div
        contentEditable="true"
        onInput={(e) => handleChangeState({ event: e })}
        // onSelect={(event) => handleOnSelect({ e: event })}
        dangerouslySetInnerHTML={{ __html: changeState }}
        placeholder="Type here..."
      />
      <div>actualSelection: {actualSelection}</div>
    </div>
  )
}
