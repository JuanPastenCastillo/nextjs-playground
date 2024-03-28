import { useState } from "react"

export const E2E_Input = () => {
  const [textState, setTextState] = useState<string>("")

  const handleTextState = (e: any) => {
    setTextState(e.target.value)
  }

  const [submittedDataState, setSubmittedDataState] = useState<string[]>([])

  const handleSubmitData = (e: any) => {
    if (e.code === "Enter") {
      setSubmittedDataState((prevState) => [...prevState, textState])
      setTextState("")
    }
  }

  return (
    <div>
      <input
        aria-label="text"
        onChange={handleTextState}
        onKeyDown={handleSubmitData}
        value={textState}
      />

      <ul data-testid="data-submitted">
        {submittedDataState.length !== 0 && (
          <>
            {submittedDataState.map((x, index) => (
              <li key={`${x}_${index}`}>{x}</li>
            ))}
          </>
        )}
      </ul>

      <input
        type="date"
        aria-label="date"
      />
      <input
        type="datetime-local"
        aria-label="datetime-local"
      />

      <input
        type="time"
        aria-label="time"
      />
      <div
        aria-label="content-editable"
        contentEditable
        suppressContentEditableWarning
      />
    </div>
  )
}
