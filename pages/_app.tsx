import '../styles/globals.css'
import type { AppProps } from 'next/app'
import {wrapper} from '@/modules/store'
import Layout from '@/components/common/Layout'
import React from 'react'


function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {
  return (
     
    <Layout>
    <Component {...pageProps} />
    <style jsx>{`
        a{
            textDecoration: none;
        }
    `}</style>
    </Layout>
  )
  //provider 삭제 07-14
}
export default wrapper.withRedux(MyApp)