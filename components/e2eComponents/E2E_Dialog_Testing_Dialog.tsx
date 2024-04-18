import { Dialog_D, useDialogLogic } from "./Dialog_D"

export const Testing_Dialog = () => {
  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <>
      <button
        onClick={(e) => openDialog({ event: e })}
        onKeyDown={(e) => openDialog({ event: e })}
        tabIndex={0}
        data-testid="dialog-open">
        Open Dialog!
      </button>

      <Dialog_D
        theRef={dialogRef}
        handleCloseDialog={(e) => closeDialog({ event: e })}
        refToCloseDialogClickingOutside={refToCloseDialogClickingOutside}
        useHide={useHide}>
        <Dialog_Children />
      </Dialog_D>
    </>
  )
}

const Dialog_Children = () => {
  return (
    <div style={{ height: "45vh", width: "85vw" }}>
      <h2>Title h2</h2>
      <p>Component here inside the Dialog</p>
      <button>Some button</button>
    </div>
  )
}
