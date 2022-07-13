import React, { useEffect, useState } from 'react'
import MyBoardList from '@/components/boards/MyBoardList'
import { loadUserApi } from '@/apis/userApi'
import { useAppDispatch } from '@/hooks'
import { fetchMyBoard } from '@/modules/boards'
import { AppState, useAppSelector } from '@/modules/store'
import { Article } from '../articles/addBoard'

export default function MyBoardListPage() {
  const dispatch = useAppDispatch()
  useEffect(()=> {    
    const token = localStorage.getItem('loginSuccessUser')
    loadUserApi({token}).then(data =>{
      const userId: any ={userId : data.userId} 
      console.log(typeof(userId))
      dispatch(fetchMyBoard(userId))
    }
    )
  }, [])
  return (
    <MyBoardList/>
  )
}
