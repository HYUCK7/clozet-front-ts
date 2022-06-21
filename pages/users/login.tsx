import React, { useState, useEffect } from 'react'
import Login from '@/components/users/Login'
import { NextPage } from 'next'
import GoogleLogin from '@/components/users/GoogleLogin'
import { useAppDispatch } from '@/hooks'
import { any } from 'prop-types'
import { useSelector } from 'react-redux'
import { loginRequest } from '@/modules/users/login'
import { RootState, RootStates } from '@/modules/store'
/* global google */

const LoginPage: NextPage = () => {
  const [loginUser, setLoginUser] = useState({username : '', password: ''})
  const dispatch = useAppDispatch()

  const onChange = (e: { preventDefault: () => void; target: { name: any; value: any } } ) => {
    e.preventDefault()
    const {name, value} = e.target;
    setLoginUser({
      ...loginUser, [name]: value
    })
  }
  const {isLoggined, loginedUser} = useSelector((state: RootStates) => state.login)

  const onSubmit = (e: any) => {
    e.preventDefault()
    console.log(`로그인 정보 ${JSON.stringify(loginUser)}`)
    dispatch(loginRequest(loginUser))
    console.log(' 모듈에 저장된 로그인값: '+JSON.stringify(loginedUser))
  }
  
  return (
    <>
    isLoggined ? {"/"} : <Login handleChange = {onChange} handleSubmit = {onSubmit}/>
    <GoogleLogin/>
    </>
  )
}
export default LoginPage