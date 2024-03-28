import { useEffect, useState } from "react"

type Props = {
  query?: string
}

export const useMediaQuery = ({
  query = "(max-width: 1085px)",
}: Props): boolean => {
  const [isMobile, setIsMobile] = useState(
    typeof window !== "undefined" ? window.matchMedia(query).matches : false,
  )

  useEffect(() => {
    const mediaQueryList = window.matchMedia(query)

    const listener = () => setIsMobile(mediaQueryList.matches)

    mediaQueryList.addEventListener("change", listener)

    return () => mediaQueryList.removeEventListener("change", listener)
  }, [query])

  return isMobile
}

/* 
!FH0
Use the actual way to check mobile or desktop of Inclusive and test it

 */
