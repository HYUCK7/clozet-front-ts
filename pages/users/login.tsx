import React, { useState, useEffect } from 'react'
import Login from '@/components/users/Login'
import { NextPage } from 'next'
import GoogleLogin from '@/components/users/GoogleLogin'
import { useAppDispatch } from '@/hooks'
import { any } from 'prop-types'
import { useSelector } from 'react-redux'
import { loginRequest, LoginUser } from '@/modules/users/login'
import { RootState, RootStates } from '@/modules/store'
import reducer from '@/modules/users/login'
/* global google */

const LoginPage: NextPage = () => {
  const [loginUser, setLoginUser] = useState<LoginUser>({username : '', password: ''})
  const dispatch = useAppDispatch()

  const onChange = (e: React.FormEvent<HTMLInputElement> ) => {
    e.preventDefault()
    const { name ,value } = e.currentTarget
    setLoginUser({
      ...loginUser, [name]: value
    })
  }
  const {isLoggined, loginedUser} = useSelector((state: RootStates) => state.login || {})

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`로그인 정보 ${JSON.stringify(loginUser)}`)
    dispatch(loginRequest(loginUser))
    console.log(' 모듈에 저장된 로그인값: '+JSON.stringify(loginedUser))
  }
  
  return (
    <>
    <Login handleChange = {onChange} handleSubmit = {onSubmit}/>
    <GoogleLogin/>
    </>
  )
}
export default LoginPage