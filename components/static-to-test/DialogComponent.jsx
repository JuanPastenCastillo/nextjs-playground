import { useRef } from "react"

export const DialogComponent = () => {
  const dialogRef = useRef()

  const openDialog = () => {
    dialogRef.current.showModal()
  }

  const closeDialog = ({ event }) => {
    if (
      event.type === "mousedown" ||
      event.type === "click" ||
      (event.code === "Enter" &&
        event.key === "Enter" &&
        event.type === "keydown") ||
      event.code === "Escape"
    ) {
      console.log("💚e:", event)

      dialogRef.current.close()
    }
  }

  return (
    <div className="dialog">
      <button onClick={openDialog}>Open Dialog 🟩</button>

      <dialog ref={dialogRef}>
        <p>This is the content of the dialog.</p>
        <button onClick={closeDialog}>Close🟥</button>
      </dialog>
    </div>
  )
}
