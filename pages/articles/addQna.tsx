import AddQna from '@/components/articles/AddQna'
import { useAppDispatch } from '@/hooks'
import React, { useRef, useState } from 'react'

export interface Question{
  title: string
  open: boolean
  content: string
}

export default function AddQnaPage() {
  const [question, setQuestion] = useState<Question>(
    {title: '', open: true, content: ''}
  )
  const dispatch = useAppDispatch()

  const checkRef = useRef<HTMLInputElement>( null )

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setQuestion({...question, [name]: value})
  }


  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    //dispatch
  }
  console.log(question)


  return (
    <AddQna handleChange = {onChange} handleSubmit = {onSubmit} check = {checkRef}/>
  )
}