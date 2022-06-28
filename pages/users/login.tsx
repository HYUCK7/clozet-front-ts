import React, { useState, useEffect } from 'react'
import Login from '@/components/users/Login'
import { NextPage } from 'next'
import GoogleLogin from '@/components/users/GoogleLogin'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { loginRequest, LoginState, LoginUser, UserLoginInput } from '@/modules/users/login'
import {  AppState, RootStates } from '@/modules/store'
/* global google */

const LoginPage: NextPage = () => {
  const [loginUser, setLoginUser] = useState<UserLoginInput>({username:'', password:''})
  const dispatch = useAppDispatch()
  
  const onChange = (e: React.FormEvent<HTMLInputElement> ) => {
    e.preventDefault()
    const { name ,value } = e.currentTarget
    setLoginUser({ ...loginUser, [name]: value })
  }

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`로그인 정보 ${JSON.stringify(loginUser)}`)
    alert(`1. 로그인 버튼 클릭 ${JSON.stringify(loginUser)}`)
    dispatch(loginRequest(loginUser))
    alert(`1-2 로그인 액션 요청 ${JSON.stringify(loginUser)}`)
    //console.log(' 모듈에 저장된 로그인 상태: '+JSON.stringify(loginedUser))
    
  }
  const {isLoggined, loginedUser} = useAppSelector((state) => state.login || {})
  //console.log('store 저장 상태  ' + isLoggined)
  return (
    <>
    <Login handleChange = {onChange} handleSubmit = {onSubmit}/>
    <GoogleLogin/>
    </>
  )
}
export default LoginPage