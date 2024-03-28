import { KeyboardEvent, MouseEventHandler, useRef } from "react"

export const DialogComponent = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)

  const openDialog = () => {
    dialogRef?.current?.showModal()
  }

  const closeDialog = ({
    event,
  }: {
    event:
      | unknown
      | MouseEventHandler<HTMLButtonElement>
      | KeyboardEvent<HTMLButtonElement>
  }) => {
    if (
      (event as MouseEvent)?.type === "mousedown" ||
      (event as MouseEvent)?.type === "click" ||
      ((event as KeyboardEvent)?.code === "Enter" &&
        (event as KeyboardEvent)?.key === "Enter" &&
        (event as KeyboardEvent)?.type === "keydown") ||
      (event as KeyboardEvent)?.code === "Escape"
    ) {
      dialogRef?.current?.close()
    }
  }

  return (
    <div className="dialog">
      <button onClick={openDialog}>Open Dialog 🟩</button>

      <dialog ref={dialogRef}>
        <p>This is the content of the dialog.</p>
        <button onClick={(e) => closeDialog({ event: e })}>Close🟥</button>
      </dialog>
    </div>
  )
}
