import { useState } from "react"

export const HighlightTextarea = ({
  value,
  onChange,
  onSelect,
  highlightedText,
}) => {
  const [start, setStart] = useState(0)
  const [end, setEnd] = useState(0)

  const handleOnSelect = (e) => {
    const selectionStart = e.target.selectionStart
    const selectionEnd = e.target.selectionEnd

    setStart(selectionStart)
    setEnd(selectionEnd)

    if (onSelect) {
      onSelect(e)
    }
  }

  const getTextBeforeSelection = () => {
    return value.substring(0, start)
  }

  const getHighlightedText = () => {
    if (!highlightedText) {
      return ""
    }

    const selectionText = value.substring(start, end)
    const highlightedSelectionText = selectionText.replace(
      new RegExp(highlightedText, "ig"),
      `<mark>${highlightedText}</mark>`,
    )

    return highlightedSelectionText
  }

  const getTextAfterSelection = () => {
    return value.substring(end)
  }

  const handleChange = (e) => {
    if (onChange) {
      onChange(e)
    }
  }

  return (
    <div>
      <div
        style={{
          whiteSpace: "pre-wrap",
          border: "1px solid #ccc",
          borderRadius: "4px",
          padding: "8px",
          height: "100px",
        }}>
        <div
          dangerouslySetInnerHTML={{
            __html: `${getTextBeforeSelection()}${getHighlightedText()}${getTextAfterSelection()}`,
          }}
        />
      </div>
      <textarea
        onSelect={(e) => handleOnSelect({ e: e })}
        // onChange={(e) => handleChange({ event: e })}
        onChange={handleChange}
        value={value}
        // style={{ display: "none" }}
      />
    </div>
  )
}
