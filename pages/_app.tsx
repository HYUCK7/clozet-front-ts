import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LoginTestPage from './users/loginTest'
import {wrapper} from '@/modules/store'
import { Nav } from '@/components/Nav'

function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {
  return ( 
    <>
    <Nav/>
    <Component {...pageProps} />
    <LoginTestPage />
    <style jsx>{`
        a{
            text-decoration: none;
        }
    `}</style>
    </>
  )
}

export default wrapper.withRedux(MyApp)
