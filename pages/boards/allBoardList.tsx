import React, {useEffect, useRef, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { useAppDispatch } from '@/hooks'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { writeComment } from '@/modules/slices/boardSlice'
import axios from 'axios'
import { Article } from '@/modules/types'
import { findComment } from '@/modules/apis/article'

export interface Props {
  list : InferGetServerSidePropsType<typeof getServerSideProps>
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (e : React.FormEvent<HTMLFormElement> ) => void
  loadArticletitle: (title: string | undefined) => void
  readComment : (title: string | undefined) => void
}

const headers = {
  "Content-Type" : "application/json",
  Authorization: "JWT fefege...",
}

const AllBoardListPage: NextPage<Props> = ({list} : Props) => {
  const [comment, setComment] = useState<Article>({comment: '', title: ''})
  const dispatch = useAppDispatch()

  const loadArticletitle = (title : string | undefined) => {
    setComment({...comment, title: title})
  }

  const onComment = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault
    const {name, value} = e.currentTarget
    setComment({ ...comment, [name] : value })
  }
  const onCommentSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(writeComment(comment))
  }
  const readComment = (title : string | undefined) => {
    const res = findComment(title)
    console.log('>>' + title)
    console.log(res)
  }
  
  return (
    <AllBoardList readComment = {readComment} loadArticletitle = {loadArticletitle} list = {list} onChange = {onComment} onSubmit = {onCommentSubmit}/>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/articles/list`,{headers})
  const list = await response.data
  return {props: {list}
  }
}


export default AllBoardListPage

