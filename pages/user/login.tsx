import React, { useState } from 'react'
import Login from '@/components/user/Login'
import { NextPage } from 'next'

const LoginPage: NextPage = () => {  
  const [isLogin, setIsLogin] = useState(false)
  const [userInfo, setUserInfo] = useState({})
  return (
    <>
    <Login setUserInfo={setUserInfo} setIsLogin={setIsLogin}/>
    </>
  )
}
export default LoginPage