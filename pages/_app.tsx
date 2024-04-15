import { GlobalStyle } from "@/components/globalStyles/GlobalStyle"
import { Layout } from "@/components/layout"
import { CheckUserWidth_Provider } from "@/context/check_user_width"
// import "@/styles/globals.css"
import type { AppProps } from "next/app"

export default function App({ Component, pageProps }: AppProps) {
  return (
    <CheckUserWidth_Provider>
      <Layout>
        <GlobalStyle />
        <Component {...pageProps} />
      </Layout>
    </CheckUserWidth_Provider>
  )
}
