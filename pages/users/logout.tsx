import Logout from '@/components/users/Logout'
import { useAppDispatch } from '@/hooks'
import { NextPage } from 'next'
import React from 'react'


const LogoutPage: NextPage = () => {
  const PATH = process.env.NEXT_PUBLIC_WEBPATH
  const logoutSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    localStorage.removeItem("loginSuccessUser")
    window.location.href = `${PATH}`
  }
  return (
    <Logout props = {logoutSubmit}/>
  )
}
//1
export default LogoutPage