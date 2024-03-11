import { createContext, useContext } from "react"
import { useWidthSize } from "../hooks/use-width_size"

const CheckUserWidth = createContext(null)

export const CheckUserWidth_Provider = ({ children }) => {
  const { isMobile } = useWidthSize()

  return (
    <CheckUserWidth.Provider
      value={{
        isMobile,
      }}>
      {children}
    </CheckUserWidth.Provider>
  )
}

export const useCheckUserWidth_Context = () => {
  return useContext(CheckUserWidth)
}
