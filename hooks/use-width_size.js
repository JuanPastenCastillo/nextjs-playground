import { useEffect, useState } from "react"
import { size } from "../utils/screen_sizes"

export const useWidthSize = () => {
  const [isMobile, setIsMobile] = useState(true)

  useEffect(() => {
    const handleResize = () => {
      const widthWindowInsideResize = window.innerWidth
      if (widthWindowInsideResize <= Number(size.laptop)) {
        setIsMobile(true)
      } else {
        setIsMobile(false)
      }
    }

    window.addEventListener("resize", handleResize)
    handleResize()

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  }, [])

  return { isMobile }
}
