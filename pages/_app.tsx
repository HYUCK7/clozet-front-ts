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
import React, { useEffect } from 'react'
import { Provider } from 'react-redux'


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
/**
MyApp.getInitialProps = async(ctx: AppContext) => {
  const token = localStorage.getItem('loginSuccessUser')

}
 */
/** 
export async function getInitialProps() {
  const token = localStorage.getItem('loginSuccessUser')
  const { results } = await (
    await 
  )
  
}
*/
/** 
export const getInitialProps = async (req: any) => {
  let token;
  const SERVER = 'http://127.0.0.1:8080'
  const headers = {
    "Content-Type" : "application/json",
    Authorization: "JWT fefege...",
}
  if (req) { //Server
  return  { page: {}}
  } else { // front
    const token = localStorage.getItem('loginSuccessUser');
    console.log('>>>>>>>>')
    const res = await axios.post(`${SERVER}/users/token`, token, {headers})
    const data = res
    return { page: data }
  }
}
*/