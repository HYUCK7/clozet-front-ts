import React, { useEffect, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { NextPage } from 'next'
import { fetchBoards } from '@/modules/boards'
import { useDispatch } from 'react-redux'

export interface fetchBoardData {
    title : string,
    content: string,
    height: string,
    weight: string,   
}
const AllBoardListPage: NextPage = () => {
  const [data, setData] = useState<fetchBoardData>({
    title : '',
    content: '',
    height: '',
    weight: '',   
  })

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchBoards())
  }, [])

  const {fetchBoardState} = useAppSelector(state => state.board)

  console.log(JSON.stringify(fetchBoardState))

  useEffect(() => {setData(fetchBoardState)})

  return (
    <AllBoardList data = {data}/>
  )
}