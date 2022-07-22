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
  picture: '', height : '', weight: '', writtenDate: '', pictureName: '', token: ''
})
  const dispatch = useAppDispatch()
  
  useEffect(()=> {    
    const token = localStorage.getItem('loginSuccessUser')
    loadUserApi({token}).then(data =>{
      const nickname = data.nickname
      setWrite({
        token : data.token,
        writtenDate: writtenDate,
        nickname: nickname,
      })
    })
  }, [])

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setWrite({...write, [name]: value})
  }

  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault() 
    dispatch(writeBoard(write))
  }

  return (
    <AddBoard info = {write} onChange={onChange} onSubmit = {onSubmit}/>
  )
}
export default AddBoardPage