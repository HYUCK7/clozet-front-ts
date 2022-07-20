import React, { useEffect, useState } from 'react'
import Main from '@/components/closets/Main'
import { NextPage } from 'next'
import { loadUserApi } from '@/apis/userApi'
import { User } from '@/modules/users/join'
import axios from 'axios'

export type Props = {
  info: User
  onChange : (e: any) => void
  //sendImage : () => void
}

const MainPage: NextPage = () => {
  //const [image, setImage] = useState({})
  const [info, setInfo] = useState<User>({nickname: ''})
  const [images, setImages] = useState()
  const onLoadFile = (e: any) => {
    e.preventDefault()
    const file = e.target.files
    console.log(file)
    setImages(file)
  }
  const onSubmitFile = async (e: any) => {
    e.preventDefault()
    const res = await axios.post(`http://127.0.0.1:8000/rc/{filename}`,images)
  }
  
  useEffect(()=> {
    const token = localStorage.getItem('loginSuccessUser')
    loadUserApi({token}).then(data => {
      const nickname = data.nickname
      setInfo({
        nickname: nickname
      })
    })
  } ,[])
  return (
    <Main info = {info} onChange = {onLoadFile}/>
  )
}
export default MainPage