import Mypage, { User } from '@/components/users/Mypage'
import { useAppDispatch } from '@/hooks'
import { updateRequest } from '@/modules/users/update'
import { StringIterator } from 'lodash'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export interface UpdateInfo {
  username? : string,
  password? : string,
  email? : string,
  name? : string,
  nickname?: string,
  phone?: string
  token?: any 
}

const MypagePage : NextPage = () => {
  const [info, setInfo] = useState<UpdateInfo>({
    username: '', 
    name: '', 
    email: '', 
    phone: '',  
    nickname:'', 
    token :null
  })

  const dispatch = useAppDispatch()

  const onInfoChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const { name , value } = e.currentTarget
    setInfo({ ...info , [name]: value})
  }
  
  const onInfoSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    console.log(`업데이트 버튼 클릭 ${JSON.stringify(info)}`)
    dispatch(updateRequest(info))
    console.log(`업데이트 액션 생성 ${JSON.stringify(info)}`)
  }

  useEffect(() => {
    const token = localStorage.getItem('loginSuccessUser')
    setInfo({token})},['loginSuccessUser'])
  
  
  return (
    <Mypage handleChange = {onInfoChange} handleSubmit = {onInfoSubmit}/>
  )
}

export default MypagePage

