import { Dialog_DWrapper } from "./styles/Dialog_DWrapper"

export type Dialog_D_Props = {
  theRef: RefObject<HTMLDialogElement>
  handleCloseDialog: (event: Event) => void
  refToCloseDialogClickingOutside: RefObject<HTMLDivElement>
  useHide: (refToCloseDialogClickingOutside, handleCloseDialog) => void
  children: ReactElement

  shouldOpenModalAlone?: boolean
  shouldOpenModalAloneDelay?: number

  shouldCloseModalAlone?: boolean
  shouldCloseModalAloneDelay?: number

  setCheckModalIsOpen?: (e: boolean) => void
}

export const Dialog_D = ({
  theRef,
  handleCloseDialog,
  refToCloseDialogClickingOutside,
  useHide,
  children,

  shouldOpenModalAlone = false,
  shouldOpenModalAloneDelay = 0,

  shouldCloseModalAlone = false,
  shouldCloseModalAloneDelay = 1200,
  setCheckModalIsOpen,
}: Dialog_D_Props): ReactElement => {
  useHide(refToCloseDialogClickingOutside, handleCloseDialog)

  useEffect(() => {
    let timeoutId: any = null

    if (theRef.current && shouldOpenModalAlone && setCheckModalIsOpen) {
      timeoutId = setTimeout(() => {
        theRef.current?.showModal()
        setCheckModalIsOpen(true)
      }, shouldOpenModalAloneDelay)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  useEffect(() => {
    let timeoutId: any = null

    if (theRef.current && shouldCloseModalAlone && setCheckModalIsOpen) {
      timeoutId = setTimeout(() => {
        theRef.current?.close()
        setCheckModalIsOpen(false)
      }, shouldCloseModalAloneDelay)
    }

    return () => {
      if (timeoutId) {
        clearTimeout(timeoutId)
      }
    }
  }, [])

  return (
    <Dialog_DWrapper
      ref={theRef}
      data-testid="dialog-content">
      <div ref={refToCloseDialogClickingOutside}>
        <Close_Icon_SVG
          onClick={handleCloseDialog}
          onKeyDown={handleCloseDialog}
          tabIndex={0}
          data-testid="close-dialog"
        />
        {children}
      </div>
    </Dialog_DWrapper>
  )
}

import { ReactElement, RefObject, useEffect, useRef, useState } from "react"

export const useDialogLogic = () => {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const refToCloseDialogClickingOutside = useRef<HTMLDivElement>(null)
  const [checkModalIsOpen, setCheckModalIsOpen] = useState<Boolean | any>(false)

  const openDialog = ({ event: e }) => {
    if (
      e.type === "click" ||
      (e.code === "Enter" && e.key === "Enter" && e.type === "keydown")
    ) {
      e.preventDefault()
      dialogRef?.current?.showModal()
      setCheckModalIsOpen(true)
    }
  }

  const closeDialog = ({ event: e }) => {
    if (
      e?.type === "mousedown" ||
      e?.type === "click" ||
      (e?.code === "Enter" && e?.key === "Enter" && e?.type === "keydown") ||
      e?.code === "Escape"
    ) {
      e.preventDefault()
      setCheckModalIsOpen(false)
      dialogRef?.current?.close()
    }
  }

  const useHide = (ref, handleStateOutside) => {
    useEffect(() => {
      function handleClickOutside(event) {
        if (ref.current && !ref?.current?.contains(event.target)) {
          setCheckModalIsOpen(false)
          handleStateOutside(event)
        }
      }

      function handleKeydownEscape(event) {
        if (ref.current && event.key === "Escape") {
          setCheckModalIsOpen(false)
          handleStateOutside(event)
        }
      }

      document.addEventListener("mousedown", handleClickOutside)
      document.addEventListener("keydown", handleKeydownEscape)

      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
        document.removeEventListener("keydown", handleKeydownEscape)
      }
    }, [refToCloseDialogClickingOutside])
  }

  return {
    dialogRef,
    openDialog,
    closeDialog,
    refToCloseDialogClickingOutside,
    useHide,
    setCheckModalIsOpen,
    checkModalIsOpen,
  }
}

const Close_Icon_SVG = (props) => (
  <svg
    {...props}
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg">
    <path
      d="M19.7071 18.2931C19.8 18.386 19.8737 18.4963 19.924 18.6177C19.9743 18.7391 20.0001 18.8692 20.0001 19.0006C20.0001 19.132 19.9743 19.2621 19.924 19.3835C19.8737 19.5048 19.8 19.6151 19.7071 19.7081C19.6142 19.801 19.5039 19.8747 19.3825 19.9249C19.2611 19.9752 19.131 20.0011 18.9996 20.0011C18.8682 20.0011 18.7381 19.9752 18.6167 19.9249C18.4953 19.8747 18.385 19.801 18.2921 19.7081L9.99958 11.4143L1.70708 19.7081C1.51944 19.8957 1.26494 20.0011 0.999579 20.0011C0.734215 20.0011 0.47972 19.8957 0.292079 19.7081C0.104439 19.5204 -0.000976557 19.2659 -0.000976562 19.0006C-0.000976568 18.7352 0.104439 18.4807 0.292079 18.2931L8.58583 10.0006L0.292079 1.70806C0.104439 1.52042 -0.000976562 1.26592 -0.000976562 1.00056C-0.000976562 0.735192 0.104439 0.480697 0.292079 0.293056C0.47972 0.105415 0.734215 0 0.999579 0C1.26494 0 1.51944 0.105415 1.70708 0.293056L9.99958 8.58681L18.2921 0.293056C18.4797 0.105415 18.7342 -5.23096e-09 18.9996 0C19.2649 5.23096e-09 19.5194 0.105415 19.7071 0.293056C19.8947 0.480697 20.0001 0.735192 20.0001 1.00056C20.0001 1.26592 19.8947 1.52042 19.7071 1.70806L11.4133 10.0006L19.7071 18.2931Z"
      fill="#1D1A1E"
    />
  </svg>
)
