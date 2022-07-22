import React, { useEffect, useState } from 'react'
import AddBoard from '@/components/boards/AddBoard'
import { useAppDispatch } from '@/hooks'
import { NextPage } from 'next'
import { writeBoard } from '@/modules/slices/boardSlice'
import { loadUserApi } from '@/modules/apis/user'
import { Article } from '@/modules/types'

const AddBoardPage: NextPage = () =>  {
  const date = new Date();
  const writtenDate = date.toDateString()
  const [write, setWrite] = useState<Article>({ articleId: 0, userId : 0, title:'', content: '',
  picture: '', height : '', weight: '', writtenDate: '', pictureName: ''
})
  const dispatch = useAppDispatch()
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setWrite({...write, [name]: value})
    
    console.log(`데이터 : ${JSON.stringify( write )}`)
  }
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`page useState에 입력된 게시판 저장 ${JSON.stringify(write)}`)
    dispatch(writeBoard(write))
  }
  
  useEffect(()=> {    
    const token = localStorage.getItem('loginSuccessUser')
    loadUserApi({token}).then(data =>{
      const nickname = data.nickname
      console.log(`유저정보 + ${JSON.stringify(data)}`)
      setWrite({
        writtenDate: writtenDate,
        nickname: nickname,
      })
    })
  }, [])
  
  
  console.log(write)
  return (
    <AddBoard info = {write} onChange={onChange} onSubmit = {onSubmit}/>
  )
}
export default AddBoardPage