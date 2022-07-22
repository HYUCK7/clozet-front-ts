import React, {useRef, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { useAppDispatch } from '@/hooks'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { writeComment } from '@/modules/slices/boardSlice'
import axios from 'axios'
import { Article } from '@/modules/types'

export interface Props {
  list : InferGetServerSidePropsType<typeof getServerSideProps>
  onChange: (e: React.FormEvent<HTMLInputElement>) => void;
  onSubmit: (e : React.FormEvent<HTMLFormElement> ) => void
  loadArticleId: (articleId: number | undefined) => void
}

const headers = {
  "Content-Type" : "application/json",
  Authorization: "JWT fefege...",
}

const AllBoardListPage: NextPage<Props> = ({list} : Props) => {
  const [comment, setComment] = useState<Article>({comment: '', articleId: 0})
  const dispatch = useAppDispatch()

  const loadArticleId = (articleId : number | undefined) => {
    setComment({...comment, articleId: articleId})
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
  
  return (
    <AllBoardList loadArticleId = {loadArticleId} list = {list} onChange = {onComment} onSubmit = {onCommentSubmit}/>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await axios.get(`${process.env.NEXT_PUBLIC_SERVER}/articles/findAllArticle`,{headers})
  const list = await response.data
  return {props: {list}
  }
}

export default AllBoardListPage