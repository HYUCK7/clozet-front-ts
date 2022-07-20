import React, { useEffect, useState } from 'react'
import Main from '@/components/closets/Main'
import { NextPage } from 'next'
import { loadUserApi } from '@/apis/userApi'
import { User } from '@/modules/users/join'
import axios from 'axios'

export type Props = {
  info: User
  onCloth : (e: any) => void
  sendImage : () => void
}

const MainPage: NextPage = () => {
  //const [image, setImage] = useState({image_files: '', preview_URL:'img/default_image.png'})
  const [image, setImage] = useState({})
  const [info, setInfo] = useState<User>({nickname: ''})

  const onCloth = (e: any) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setImage({...image, [name]: value})
  }

  const onSubmit = () => {

  }
/** 
  const onCloth  = (e : any) => {
    e.preventDefault()
    if(e.target.files[0]) {
      URL.revokeObjectURL(image.preview_URL)
      const preview_URL = URL.createObjectURL(e.target.files[0])
      setImage(() => (
        {
          image_files: e.target.files[0],
          preview_URL: preview_URL
      }))
    }
  }

  const sendImage = async () => {
    if(image.image_files) {
      const formData = new FormData()
      formData.append('file', image.image_files)
      await axios.post(`/rc/{filename}`, formData)
      setImage({
        image_files: "",
        preview_URL: 'img/default_image.png'
      })
    }else{
      alert('사진 등록 부탁.')
    }
  }
  */
  //console.log('>>' + JSON.stringify(image))
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
    <Main info = {info} onCloth = {onCloth} sendImage = {onSubmit}/>
  )
}
export default MainPage