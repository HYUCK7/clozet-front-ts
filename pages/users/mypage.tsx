import Mypage from '@/components/users/Mypage'
import { useAppDispatch } from '@/hooks'
import { removeRequest, updateRequest } from '@/modules/slices/userSlice'
import { User } from '@/modules/types'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'

export interface deleteInfo{
  token: any
}

const MypagePage : NextPage = () => {
  const [info, setInfo] = useState<User>({
    username: '', 
    name: '', 
    email: '', 
    phone: '',  
    nickname:'', 
    token : ''
  })

  useEffect(() => {
    const token : string | null = localStorage.getItem("loginSuccessUser")
    if ( token !== null) {
      setInfo({token : token})
    } else {
      throw('error')}
    },[localStorage])

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
    console.log(`토큰 전송 : ${JSON.stringify(info.token)}`)
    dispatch(removeRequest(info.token))
  }

   console.log(`info ${JSON.stringify(info)}`)
  return (
    <Mypage handleChange = {onInfoChange} handleSubmit = {onInfoSubmit} handleClick = {onDeleteClick}
    /> // 삭제 토큰 보내기 테스트
  )
}

export default MypagePage

