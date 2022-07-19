import React, { useCallback, useEffect, useState } from 'react'
import AllBoardList from '@/components/boards/AllBoardList'
import { useAppDispatch,  } from '@/hooks'
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
  
  return (
    <AllBoardList />
  )
}
/** 
AllBoardListPage.getInitialProps = (store) => ({
  
})
*/

export default AllBoardListPage