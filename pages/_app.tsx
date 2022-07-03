import '../styles/globals.css'
import type { AppProps } from 'next/app'
import LoginTestPage from './users/loginTest'
import {wrapper} from '@/modules/store'
import { Nav } from '@/components/Nav'
import Layout from '@/components/Layout'

function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {
  return ( 
    <>
    <Layout>
    <Component {...pageProps} />
    <LoginTestPage />
    <style jsx>{`
        a{
            textDecoration: none;
        }
    `}</style>
    </Layout>
    </>
  )
}

export default wrapper.withRedux(MyApp)

