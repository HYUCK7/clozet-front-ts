import React, { useState, useEffect } from 'react'
import Login from '@/components/users/Login'
import { NextPage } from 'next'
import GoogleLogin from '@/components/users/GoogleLogin'
import { useAppDispatch } from '@/hooks'
import { loginRequest  } from '@/modules/slices/userSlice'
import {  AppState, useAppSelector,  } from '@/modules/store'
import LoginTestPage from './loginTest'
import { UserLoginInput } from '@/modules/types'
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
    dispatch(loginRequest(loginUser))
  }

  const {isLoggined, loginedUser} = useAppSelector((state : AppState) => state.rootReducer.user)

  return (
    <>
    <Login handleChange = {onChange} handleSubmit = {onSubmit}/>
    <LoginTestPage />
    </>
  )
}
export default LoginPage

