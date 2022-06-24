import FindAccount from '@/components/users/FindAccount'
import FindUserName from '@/components/users/FindAccount'
import { useAppDispatch } from '@/hooks'
import { NextPage } from 'next'
import React, { useState } from 'react'

type UserFindIdInput = {
  name: string,
  email: string
  phone: string,
}
type UserFindPwInput = {
  username: string,
  email : string,
  phone: string
}

const findAccountPage: NextPage = () => {
  const [findUserName, setFindUserName] = useState<UserFindIdInput>
  ({name: '', email :'', phone: ''});
  const [findPw, setFindPw] = useState<UserFindPwInput>({
    username: '', email: '', phone: ''
  })
  const dispatch = useAppDispatch()

  const onChangeFindId = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setFindUserName({...findUserName, [name]: value})
  }

  const onSubmitFindId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`회원 정보 ${JSON.stringify(findUserName)}`)
    //dispatch()
  }

  const onChangeFindPw = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setFindPw({...findPw, [name] :value})
  }

  const onSubmitFindPw = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`비밀번호 찾기 회원 정보 ${JSON.stringify(findPw)}`)
    //dispatch
  }
  return (
    <FindAccount handleFindId={onChangeFindId} submitFindId = {onSubmitFindId}
    handleFindPw = {onChangeFindPw} submitFindPw = {onSubmitFindPw}/>
  )
}
export default findAccountPage