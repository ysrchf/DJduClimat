import "@/styles/globals.css"
import { AppContextProvider } from "../AppContext"

export default function App({ Component, pageProps }) {
  return (
    <AppContextProvider>
      <Component {...pageProps} />
    </AppContextProvider>
  )
}
