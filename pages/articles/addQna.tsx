import { loadUserApi } from '@/apis/userApi'
import AddQna from '@/components/articles/AddQna'
import { useAppDispatch } from '@/hooks'
import { writeQna } from '@/modules/boards/qna'
import React, { useEffect, useState } from 'react'
import { Article } from './addBoard'

export default function AddQnaPage() {
  const date = new Date();
  const parseDate = date.toDateString()
  const [question, setQuestion] = useState<Article>(
    {title: '', open: '', content: '', token: '', nickname: '', writtenDate: ''}
  )
  const dispatch = useAppDispatch()
 

 useEffect(()=> {
  const token = localStorage.getItem('loginSuccessUser')
  loadUserApi({token}).then(data => {
    const nickname = data.nickname
  setQuestion({token: token,
                open: 'true',
                nickname: nickname,
                writtenDate: parseDate})
  })}, [])

  const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setQuestion({...question, [name]: value})
  }
  console.log(question)
  const checkChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
    e.target.checked ? setQuestion({...question, open: 'false'}) : setQuestion({...question, open: 'true'})
  }
  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(writeQna(question))
  }



  return (
    <AddQna nickname = {question.nickname} checkChange = {checkChange} handleChange = {onChange} handleSubmit = {onSubmit} />
  )
}