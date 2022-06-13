import React, { useState, useEffect } from 'react'
import Login from '@/components/user/Login'
import { NextPage } from 'next'
import GoogleLogin from '@/components/user/GoogleLogin'
/* global google */

const LoginTestPage: NextPage = () => {
  return (
    <>
    <GoogleLogin/>
    </>
  )
}
export default LoginTestPage