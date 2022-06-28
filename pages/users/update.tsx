import Update from '@/components/users/Update'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { StringIterator } from 'lodash'
import { NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'

export interface fetchData{
  username: string,
  name: string,
  email: string,
  phone: string,
  birth: string, 
  nickname: string
}

const updatePage : NextPage = () => {
  const [data, setData] = useState<fetchData>({
    username : '', name: '', email: '', phone: '', birth: '', nickname:''  })

  // 스토어 내 로그인 정보 가져오겠음.
  const { userInfo } = useAppSelector(state => state.login);
  console.log(JSON.stringify(userInfo))
  useEffect(() => {setData(userInfo)})

  return (
    <Update data = {data}/>
  )
}

export default updatePage