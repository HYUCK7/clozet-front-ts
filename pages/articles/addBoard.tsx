import React, { useState } from 'react'
import AddBoard from '@/components/articles/AddBoard'
import { useAppDispatch } from '@/hooks'
import { NextPage } from 'next'
import { writeBoard } from '@/modules/boards'

export interface ArticleWrite {
  title: string,
  content: string,
  picture?: any | undefined,
  height: string,
  weight: string
}

const AddBoardPage: NextPage = () =>  {
  const [write, setWrite] = useState<ArticleWrite>({
    title: '', content: '', height: '', weight: '', picture: null
  })
  const dispatch = useAppDispatch()
  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setWrite({...write, [name]: value})
  }
  const onSubmit = (e:React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    alert(`page useState에 입력된 게시판 저장 ${JSON.stringify(write)}`)
    dispatch(writeBoard(write))
  }
  return (
    <AddBoard onChange={onChange} onSubmit = {onSubmit}/>
  )
}
export default AddBoardPage