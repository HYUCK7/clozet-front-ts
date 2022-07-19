import React, { useEffect, useState } from 'react'
import MyBoardList from '@/components/boards/MyBoardList'
import { loadUserApi } from '@/apis/userApi'
import { useAppDispatch } from '@/hooks'
import { ArticleActions, fetchMyBoard, removeBoard } from '@/modules/boards'
import { AppState, useAppSelector } from '@/modules/store'
import { Article } from './addBoard'

export default function MyBoardListPage() {

  const data = useAppSelector((state: AppState) => state.rootReducer.article)
  console.log(`셀렉터 데이터 ` + JSON.stringify(data))

  const [ info, setInfo ] = useState<Array<Article>>([])
  const dispatch = useAppDispatch()
  
  useEffect(()=> {    
    const token = localStorage.getItem('loginSuccessUser')
    loadUserApi({token}).then(data =>{
      const userId: {} ={userId : data.userId} 
      dispatch(fetchMyBoard(userId))
      console.log(data.articles)
      //setDelList({token: token})
      setInfo(data.articles)
    })
  }, [])
  
console.log(` infor값: ${JSON.stringify(info)}`)

  //const onDeleteChange = (e : React.)

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
