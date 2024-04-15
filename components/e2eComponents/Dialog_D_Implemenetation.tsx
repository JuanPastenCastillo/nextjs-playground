import { Dialog_D, useDialogLogic } from "./Dialog_D"
import { Dialog_Children } from "./Dialog_D_Children"

export const Dialog_D_Implemenetation = () => {
  const {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    checkModalIsOpen,
  } = useDialogLogic()

  return (
    <div>
      <p>Currenyly, the modal is:</p>
      <p data-testid="dialog-status">{String(checkModalIsOpen)}</p>

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
    </div>
  )
}
