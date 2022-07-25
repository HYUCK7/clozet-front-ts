import FindAccount from '@/components/users/FindAccount'
import { useAppDispatch } from '@/hooks'
import { AppState, useAppSelector } from '@/modules/store'
import { findUserPwRequest } from '@/modules/slices/userSlice'
import { findUserNameRequest } from '@/modules/slices/userSlice'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { UserFindIdInput, UserFindPwInput } from '@/modules/types'

const FindAccountPage: NextPage = () => {
  const [findUserName, setFindUserName] = useState<UserFindIdInput>
  ({name: '', email :''});
  const [findPw, setFindPw] = useState<UserFindPwInput>
  ({username: '', email: ''})
  const [usernameResult, setUsernameResult] = useState<string>('')
  const dispatch = useAppDispatch()

  const {data} = useAppSelector((state: AppState) => state.rootReducer.user)
  const {status} = useAppSelector((state: AppState) => state.rootReducer.user)
  console.log(data, status)

  useEffect(()=>{setUsernameResult(JSON.stringify(data))},[data])
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
    <FindAccount findId = {usernameResult} handleFindId={onChangeFindId} submitFindId={onSubmitFindId}
    handleFindPw={onChangeFindPw} submitFindPw={onSubmitFindPw}/>
  )
}
export default FindAccountPage