import React, { useState, useEffect } from 'react'
import Login from '@/components/user/Login'
import { NextPage } from 'next'
import GoogleLogin from '@/components/user/GoogleLogin'
import { Navigate } from 'react-router-dom'

/* global google */

const LoginTestPage: NextPage = () => {
  const handleCredentialResponse = async(response: any) => {
    const { credential } = response;
    console.log("ENCODED JWT ID TOKEN" + response.credential)
  }
  return (
    <>
    <GoogleLogin/>
    </>
  )
}
export default LoginTestPage