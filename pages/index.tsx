import { INDEX_HOME } from "@/components/home/HOME"
import { useMediaQuery } from "@/utils/user-event/useResizeWindow"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  let getSize = useMediaQuery({})
  console.log("getSize:", getSize)

  return (
    <>
      {/* <Calculator />

      <INDEX_HOME /> */}
      <INDEX_HOME />

      {/* <KeyboardComponent /> */}
    </>
  )
}
