import React, { useCallback, useEffect, useRef, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { useAppDispatch,  } from '@/hooks'
import { GetServerSideProps, InferGetServerSidePropsType, NextPage } from 'next'
import { ArticleState, fetchBoards, fetchBoardSuccess, writeComment } from '@/modules/boards'
import { useDispatch, useSelector } from 'react-redux'
import { wrapper } from '@/modules/store'
import axios from 'axios'
import { Article } from './addBoard'
/** 
export interface fetchBoardData {
    articleId?: number,
    title? : string,
    writtenDate?: null,
    open?: null,
    content?: string,
    picture?: null
    height?: string,
    weight?: string,   
}
*/

export interface Props {
  list : InferGetServerSidePropsType<typeof getServerSideProps>
  onChange: (e: React.FormEvent<HTMLInputElement> )=> void
  onSubmit: (e : React.FormEvent<HTMLFormElement> )=> void
}

const headers = {
  "Content-Type" : "application/json",
  Authorization: "JWT fefege...",
}

const AllBoardListPage: NextPage<Props> = ({list} : Props) => {
  const [comment, setComment] = useState<Article>({comment: '', articleId: 0})
  const InputRef = useRef()
  const dispatch = useAppDispatch()
  
  const onComment = (e : React.FormEvent<HTMLInputElement>) => {
    e.preventDefault()
    const {name, value} = e.currentTarget
    setComment({...comment, [name] :value})
    
  }
  const onCommentSubmit = (e : React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    dispatch(writeComment(comment))
    
  }
 
  console.log('>>' + JSON.stringify(comment))
  return (
    <AllBoardList list = {list} onChange = {onComment} onSubmit = {onCommentSubmit}/>
  )
}

export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const response = await axios.get(`http://127.0.0.1:8080/articles/findAllArticle`,{headers})
  const list = await response.data
  return {props: {list}
  }
}

export default AllBoardListPage