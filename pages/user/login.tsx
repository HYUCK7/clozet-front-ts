import React, { useState, useEffect } from 'react'
import Login from '@/components/users/Login'
import { NextPage } from 'next'
import GoogleLogin from '@/components/users/GoogleLogin'
/* global google */

const LoginPage: NextPage = () => {
  return (
    <>
    <Login/>
    <GoogleLogin/>
    </>
  )
}
export default LoginPage