import Logout from '@/components/users/Logout'
import { useAppDispatch } from '@/hooks'
import { NextPage } from 'next'
import React from 'react'


const LogoutPage: NextPage = () => {
  const logoutSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    localStorage.removeItem("loginSuccessUser")
    window.location.href = '/'
  }
  return (
    <Logout props = {logoutSubmit}/>
  )
}

export default LogoutPage