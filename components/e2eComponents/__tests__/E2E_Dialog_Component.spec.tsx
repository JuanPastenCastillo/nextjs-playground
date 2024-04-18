import { expect, test } from "@playwright/experimental-ct-react"
import { Dialog_D, useDialogLogic } from "../Dialog_D"

const Testing_Dialog = () => {
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
        <div style={{ height: "45vh", width: "85vw" }}>
          <h2>Title h2</h2>
          <p>Component here inside the Dialog</p>
          <button>Some button</button>
        </div>
      </Dialog_D>
    </>
  )
}

test.describe("Group of tests", () => {
  test(`Component Testing_Dialog is showed`, async ({ mount }) => {
    const component = await mount(<Testing_Dialog />)

    await expect(component).toBeVisible()
  })
  test("Open and close Dialog with click", async ({ page, mount }) => {
    const component = await mount(<Testing_Dialog />)

    const getOpenDialog = component.getByTestId("dialog-open")
    const getDialogContent = component.getByTestId("dialog-content")

    await expect(getOpenDialog).toBeVisible()
    await expect(getDialogContent).not.toBeVisible()

    await getOpenDialog.click()
    await expect(getDialogContent).toBeVisible()

    const closeDialog = component.getByTestId("close-dialog")
    await closeDialog.click()
    await expect(getDialogContent).not.toBeVisible()

    await getOpenDialog.click()
    await expect(getDialogContent).toBeVisible()

    const getMain = page.getByTestId("main")
    await getMain.click({ position: { x: 0, y: 0 } })
    await expect(getDialogContent).not.toBeVisible()
  })

  test("Open and close Dialog with keyboard", async ({ page, mount }) => {
    const component = await mount(<Testing_Dialog />)

    const getOpenDialog = component.getByTestId("dialog-open")
    const getDialogContent = component.getByTestId("dialog-content")

    await expect(getOpenDialog).toBeVisible()
    await expect(getDialogContent).not.toBeVisible()

    await getOpenDialog.focus()
    await expect(getOpenDialog).toBeFocused()

    await getOpenDialog.press("Enter")
    await expect(getDialogContent).toBeVisible()

    const closeDialog = component.getByTestId("close-dialog")
    await expect(closeDialog).toBeFocused()

    await closeDialog.press("Enter")
    await expect(getDialogContent).not.toBeVisible()

    await getOpenDialog.press("Enter")
    await expect(getDialogContent).toBeVisible()

    await component.press("Escape")
    await expect(getDialogContent).not.toBeVisible()
  })
})
