import parse from "html-react-parser"
import { useState } from "react"
import sanitizeHtml from "sanitize-html"

export const Sanitize_Editor = () => {
  const html = "<strong>hello world</strong>"
  console.log(sanitizeHtml(html))
  console.log(sanitizeHtml("<img src=x onerror=alert('img') />"))
  console.log(sanitizeHtml("console.log('hello world')"))
  console.log(sanitizeHtml("<script>alert('hello world')</script>"))

  const [content, setContent] = useState("Type here...")

  const handleChange = (event) => {
    setContent(event.target.value)
  }

  const handleOnSelect = (event) => {
    console.log(event.target.value, event)
  }

  return (
    <>
      <textarea
        contentEditable
        onChange={handleChange}
        onSelect={handleOnSelect}>
        {parse(content)}
      </textarea>
    </>
  )
}
