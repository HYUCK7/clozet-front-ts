import React, { useState, useEffect } from 'react'
import Login from '@/components/user/Login'
import { NextPage } from 'next'
/* global google */

const LoginPage: NextPage = () => {
  const [gLogin, setGlogin] = useState(false)
 // const onGoogleSignin = async res =>{
    //const {credential} = res
    //const result = await postLoginToken(credential, setIsLogin)
    //setGLogin(result)
  //}  
  return (
    <>
    <Login/>

    </>
  )
}
export default LoginPage