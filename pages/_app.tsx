import '../styles/globals.css'
import type { AppContext, AppProps } from 'next/app'
import LoginTestPage from './users/loginTest'
import {wrapper} from '@/modules/store'
import { Nav } from '@/components/Nav'
import Layout from '@/components/Layout'
import axios from 'axios'
import { cookieStringToObject } from '@/apis/utils/utils'
import { NextComponentType, NextPageContext } from 'next'
import { AppTreeType } from 'next/dist/shared/lib/utils'
import { Router } from 'next/router'
import { isContext } from 'vm'

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
/** 
MyApp.getServerSideProps = async(context: AppContext) => {
  const appServerSideProps = await MyApp.getServerSideProps(context)
  const appToken = localStorage.getItem('loginSuccessUser');
  console.log(typeof appToken)
  //axios.defaults.headers.cookie = appToken
  const { store } = context.ctx;
  const { isLogged } = store.getstate().user;
  try{
    if(!isLogged && appToken){
      
    }
  }

}*/

MyApp.getServerSideProps = async(context: AppContext) => {
  await stayLoggedIn(context);
}

export default wrapper.withRedux(MyApp)

export const stayLoggedIn = async (context: { Component?: 
  NextComponentType<NextPageContext<any>, {}, {}>; 
  AppTree?: AppTreeType; ctx?: NextPageContext<any>; 
  router?: Router; store?: any }) => {

  const appToken = localStorage.getItem('loginSuccessUser')
  context.store.dispatch(
    loadUserRequest({
      accessToken: appToken
    })
  )
};

