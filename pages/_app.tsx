import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import LoginTestPage from './users/loginTest'
import store, {wrapper} from '@/modules/store'
import { Nav } from '@/components/Nav'
import Layout from '@/components/Layout'
import axios from 'axios'
import { NextComponentType, NextPageContext } from 'next'
import { AppTreeType } from 'next/dist/shared/lib/utils'
import { Router } from 'next/router'
import { isContext } from 'vm'
import { loadUserRequest, Token } from '@/modules/users/loadUser'
import { useEffect } from 'react'
import { Provider } from 'react-redux'


function MyApp({ Component, pageProps: {...pageProps} }: AppProps) {
  return ( 
    <Provider store = {store}>
    <Layout>
    <Component {...pageProps} />
    <LoginTestPage />
    <style jsx>{`
        a{
            textDecoration: none;
        }
    `}</style>
    </Layout>
    </Provider>
  )
}
export default wrapper.withRedux(MyApp)

MyApp.getInitialStateProps = async(context: AppContext) => {
   alert('>>>>>>>>')
   
}