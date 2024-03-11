import { INDEX_HOME } from "@/components/home/HOME"
import { useMediaQuery } from "@/utils/user-event/useResizeWindow"
import { Inter } from "next/font/google"

const inter = Inter({ subsets: ["latin"] })

export default function Home() {
  let getSize = useMediaQuery({})

  return (
    <>
      {/* <Calculator />

      <INDEX_HOME /> */}
      <h1>Changes!</h1>
      <INDEX_HOME />

      {/* <KeyboardComponent /> */}
    </>
  )
}
