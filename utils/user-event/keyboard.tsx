import { useEffect, useState } from "react"

export const KeyboardComponent = () => {
  const [toggleShow, setToggleShow] = useState(false)

  useEffect(() => {
    const handleToggleShow = (event: any) => {
      if (event.key === "F1") setToggleShow((prevState) => !prevState)
      if (event.key === "Escape") setToggleShow(false)
    }

    window.addEventListener("keydown", handleToggleShow)

    return () => {
      window.removeEventListener("keydown", handleToggleShow)
    }
  }, [])

  return (
    <section>
      <h1>Some title</h1>
      <button>Click here to toggle</button>

      {toggleShow && (
        <>
          <p>Showed!</p>
        </>
      )}
    </section>
  )
}
