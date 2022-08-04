import React, {useEffect, useRef, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { useAppDispatch } from '@/hooks'
import { GetServerSideProps, GetStaticProps, InferGetServerSidePropsType, InferGetStaticPropsType, NextPage } from 'next'
import { writeComment } from '@/modules/slices/boardSlice'
import axios from 'axios'
import { Article } from '@/modules/types'
import { findAllBoards } from '@/modules/apis/article'
//import { findComment } from '@/modules/apis/article'

export interface Props {
  list : Article
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
  const [commentList, setCommentList] = useState<Article> ({title: '', token:''})
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
  
  const readComment = async (title : string | undefined) => {
    const token = localStorage.getItem('loginSuccessUser')
    const res = await axios.post(`${process.env.NEXT_PUBLIC_SERVER}/list/comment`, commentList, {headers})
  }
  
  return (
    <AllBoardList readComment = {readComment} loadArticletitle = {loadArticletitle} list = {list} onChange = {onComment} onSubmit = {onCommentSubmit}/>
  )
}



export default AllBoardListPage

