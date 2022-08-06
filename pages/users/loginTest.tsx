import React, { useState, useEffect } from 'react'
import Login from '@/components/users/Login'
import { NextPage } from 'next'
import GoogleLogin from '@/components/users/GoogleLogin'
import { Navigate } from 'react-router-dom'

const LoginTestPage: NextPage = () => {
  const handleCredentialResponse = async(response: any) => {
    const { credential } = response;
  }
  return (
    <>
    <GoogleLogin/>
    </>
  )
}
export default LoginTestPage