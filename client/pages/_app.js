import '@/styles/globals.css'
import Nav from '@/components/Nav'
import { UserContextProvider } from '@/components/UserContext'

export default function App({ Component, pageProps }) {
  return (
    <>
    <UserContextProvider>
    <Nav />
<Component {...pageProps} />
</UserContextProvider>
</>
  )
}
  
  
