import { loadUserApi } from '@/modules/apis/user'
import AddQna from '@/components/boards/AddQna'
import { useAppDispatch } from '@/hooks'
import { writeQna } from '@/modules/slices/boardSlice'
import React, { useEffect, useState } from 'react'
import { Article } from '@/modules/types'

export default function AddQnaPage() {
  const date = new Date();
  const parseDate = date.toDateString()
  const [question, setQuestion] = useState<Article>(
    {articleId : 0, title: '', open: '', content: '', token: '', nickname: '', writtenDate: ''}
  )
  const dispatch = useAppDispatch()
 
 useEffect(()=> {
  const token = localStorage.getItem('loginSuccessUser')
  loadUserApi({token}).then(data => {
    const nickname = data.nickname
  setQuestion({
                token: token,
                open: 'true',
                nickname: nickname,
                writtenDate: parseDate})
  })}, [])

  const onChange = (e: React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setQuestion({...question, [name]: value})
  }
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