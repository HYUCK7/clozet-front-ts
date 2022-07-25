import React, { useEffect, useState } from 'react'
import Main from '@/components/closets/Main'
import { NextPage } from 'next'
import { loadUserApi } from '@/modules/apis/user'
import axios from 'axios'
import { User } from '@/modules/types'
import { useAppDispatch } from '@/hooks'
import { addCloth } from '@/modules/slices/closetSlice'



export type Props = {
  info: User
  onChange : (e: React.FormEvent) => void
  onSubmit : (e: React.FormEvent) => void
}

const headers = {
  "Content-Type" : "multipart/form-data",
  Authorization: "JWT fefege...",
}

const MainPage: NextPage = () => {
  const [info, setInfo] = useState<User>({nickname: ''})
  const [images, setImages] = useState('')
  const [sort, setSort] = useState({picture: {}, cloth: {item: '', color: ''}})
  const dispatch = useAppDispatch()

  const onLoadFile = (e: any) => {
    e.preventDefault()
    const file = e.target.files
    console.log(file)
    setImages(file)
  }
  const onSubmitFile = async (e: any) => {
    e.preventDefault()
    const picture = new FormData()
    picture.append('uploadImage', images[0])
    const res = await axios.post(`http://127.0.0.1:8000/rc`, picture, {headers})
    const cloth = res.data
    setSort({picture: picture, cloth: cloth})

    if(cloth !== null) {
      dispatch(addCloth(sort))
    } else {
      alert('사진을 다시 등록 해주세요.')
    }
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
    <Main info = {info} onChange = {onLoadFile} onSubmit = {onSubmitFile}/>
  )
}
export default MainPage