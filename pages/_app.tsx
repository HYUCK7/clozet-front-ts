import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LoginTestPage from './user/loginTest'

function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {
  return ( 
    <><Component {...pageProps} /><LoginTestPage /></>
  )
}

export default MyApp
