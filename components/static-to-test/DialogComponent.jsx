import { useRef } from "react"

export const DialogComponent = () => {
  const dialogRef = useRef()

  const openDialog = () => {
    dialogRef.current.showModal()
  }

  const closeDialog = () => {
    dialogRef.current.close()
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
