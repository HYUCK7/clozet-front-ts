import React, { useCallback, useEffect, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { NextPage } from 'next'
import { fetchBoards, fetchBoardSuccess } from '@/modules/boards'
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

  const {title, content, height, weight} = useAppSelector((state) => state.article || {})

  console.log(JSON.stringify({title, content, height, weight}))

  const fetchAllArticle = useCallback(() => {
    setData({title, content, height, weight})
  }, [])

  useEffect(() => {fetchAllArticle();}, [fetchAllArticle])
  
  // 무한 loop 생성 https://typeofnan.dev/fix-the-maximum-update-depth-exceeded-error-in-react/
  return (
    <AllBoardList data = {data}/>
  )
}
export default AllBoardListPage