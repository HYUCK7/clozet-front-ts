import React, { useEffect, useState } from 'react'
import MyBoardList from '@/components/boards/MyBoardList'
import { useAppDispatch } from '@/hooks'
import { fetchMyBoard, removeBoard } from '@/modules/slices/boardSlice'
import { Article } from '@/modules/types'
import { findMyBoards } from '@/modules/apis/article'
import { NextPage } from 'next'

const MyBoardListPage:NextPage =() => {
  const [ info, setInfo ] = useState<Array<Article>>([])
  const dispatch = useAppDispatch()
  
  useEffect(()=> {    
    const token = localStorage.getItem('loginSuccessUser')
    findMyBoards({token}).then(data => {
      setInfo(data)
    })
  }, [])
    
console.log(` info값: ${JSON.stringify(info)}`)

  const onDeleteClick = (articleNo: any) => {
    const token = localStorage.getItem('loginSuccessUser')
    console.log(`삭제하기 위함 : ${JSON.stringify({articleId: articleNo, token: token })}`)
    dispatch(removeBoard({articleId: articleNo, token: token }))
    window.location.href = ('/boards/myBoardList')
  }
  return (
    <MyBoardList info = {info} onDeleteClick = {onDeleteClick}/>
  )
}
export default MyBoardListPage
