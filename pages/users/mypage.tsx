import { removeUserTokenApi } from '@/apis/userApi'
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

export interface deleteInfo{
  token: any
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

  const [token, setToken] = useState<deleteInfo>() 

  useEffect(() => {
    const token : string | null = localStorage.getItem('loginSuccessUser')
    if ( token !== null) {
      setToken({token})
    } else {
      throw('error')}
    },['loginSuccessUser'])

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
  }

  const onDeleteClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault()
    localStorage.removeItem('loginSuccessUser')
    window.location.href = ('/')
    console.log(`토큰 전송 : ${JSON.stringify(token)}`)
    removeUserTokenApi({token})
  }
  
  return (
    <Mypage handleChange = {onInfoChange} handleSubmit = {onInfoSubmit}
    deleteClick = {onDeleteClick}/> // 삭제 토큰 보내기 테스트
  )
}

export default MypagePage

