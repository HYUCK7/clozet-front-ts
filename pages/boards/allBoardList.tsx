import React, { useCallback, useEffect, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { useAppDispatch, useAppSelector } from '@/hooks'
import { NextPage } from 'next'
import { ArticleState, fetchBoards, fetchBoardSuccess } from '@/modules/boards'
import { useDispatch, useSelector } from 'react-redux'
import { wrapper } from '@/modules/store'
 
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


const AllBoardListPage: NextPage = () => {
  /** 
  const [info, setInfo] = useState<fetchBoardData>({
    title: '', content: '', height: '', weight:''})

    // 서버 게시물 데이터 요청
  const dispatch = useAppDispatch()
  useEffect(() => {
    dispatch(fetchBoards()) 
  }, [])

   // selector
  const data = useAppSelector((state) => state.article)
  console.log(JSON.stringify(data && 1))

  // setdata에 대한 무한루프 방지
  const fetchAllArticle = useCallback(() => {
    setInfo(data)
  }, [])

  useEffect(() => {fetchAllArticle();}, [])
  */
  // 무한 loop 생성 https://typeofnan.dev/fix-the-maximum-update-depth-exceeded-error-in-react/
  return (
    <AllBoardList />
  )
}
/** 
AllBoardListPage.getInitialProps = (store) => ({
  
})
*/

export default AllBoardListPage