import AddQna from '@/components/articles/AddQna'
import { useAppDispatch } from '@/hooks'
import { writeQna } from '@/modules/boards/qna'
import React, { useEffect, useState } from 'react'

export interface Question{
  title: string
  open: string
  content: string
  token : string | null
}
export default function AddQnaPage() {
  const [question, setQuestion] = useState<Question>(
    {title: '', open: 'true', content: '', token: ''}
  )
  const dispatch = useAppDispatch()
  
  useEffect (()=> {
    const token = localStorage.getItem('loginSuccessUser')
    setQuestion({...question, token: token})
  }, [])

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
    <AddQna checkChange = {checkChange} handleChange = {onChange} handleSubmit = {onSubmit} />
  )
}