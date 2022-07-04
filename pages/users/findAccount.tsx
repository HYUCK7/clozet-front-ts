import FindAccount from '@/components/users/FindAccount'
import FindUserName from '@/components/users/FindAccount'
import { useAppDispatch } from '@/hooks'
import store, { AppState, useAppSelector } from '@/modules/store'
import { findUserPwRequest } from '@/modules/users/findPw'
import { findUserNameRequest, FindUserNameState, ResultFindUserName } from '@/modules/users/findUserName'
import { Slice } from '@reduxjs/toolkit'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'



export type UserFindIdInput = {
  name: string,
  email: string
  
}
export type UserFindPwInput = {
  username: string,
  email : string,
 
}

const findAccountPage: NextPage = () => {
  const [findUserName, setFindUserName] = useState<UserFindIdInput>
  ({name: '', email :''});
  const [findPw, setFindPw] = useState<UserFindPwInput>({
    username: '', email: ''
  })
  const [usernameResult, setUsernameResult] = useState<Array<ResultFindUserName>>([])
  //
  const dispatch = useAppDispatch()
  const data= useAppSelector((state : AppState) => state.findUserName)
  useEffect(()=> {
    setUsernameResult(data)
    console.log(data)
    }, [data])
  
  console.log(usernameResult)
  

  const onChangeFindId = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setFindUserName({...findUserName, [name]: value})
  }

  const onSubmitFindId = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`회원 정보 ${JSON.stringify(findUserName)}`)
    dispatch(findUserNameRequest(findUserName))
  }

  const onChangeFindPw = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setFindPw({...findPw, [name] :value})
  }

  const onSubmitFindPw = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`비밀번호 찾기 회원 정보 ${JSON.stringify(findPw)}`)
    dispatch(findUserPwRequest(findPw))
  }
  return (
    <FindAccount handleFindId={onChangeFindId} submitFindId = {onSubmitFindId}
    handleFindPw = {onChangeFindPw} submitFindPw = {onSubmitFindPw}/>
  )
}
export default findAccountPage