import { fetchMyBoardApi } from '@/apis/articleApi'
import articleSlice from '@/modules/articles'
import { Axios } from 'axios'
import React, { useEffect, useState } from 'react'

type Props = {}

const MyBoardList = (props: Props) => {
    const [myBoard, setMyBoard] = useState()
    useEffect(() => {
        const token = localStorage.getItem('loginSuccessUser')
        fetchMyBoardApi({token}).then(data => {
            setMyBoard(data)
        })}
        , [])
  return (
    <div> 
        <div text-align = "center">
            <h1># 내 게시글</h1>
        </div>
        
        <div className="card mb-3">
            <img src='' className="card-img-top" alt=""/>
        <div className="card-body">
            <h5 className="card-title">article.title</h5>
            <p className="card-text">article.content</p>
            <p className="card-text">article.height, article.weight</p>
            <p className="card-text"><small className="text-muted">article.writtenDate</small></p>
        </div>
        </div>
        
    </div>
    
  )
}


export default MyBoardList