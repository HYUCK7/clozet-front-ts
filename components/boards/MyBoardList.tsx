import { loadUserApi } from '@/apis/userApi'
import { useAppDispatch } from '@/hooks'
import { fetchMyBoard } from '@/modules/boards'
import { AppState, useAppSelector } from '@/modules/store'
import React, { useEffect, useState } from 'react'
import { Article } from './AllBoardList'
import css from "styled-jsx/css"

type Props = {

}


const MyBoardList = (props : Props) => {
    

    const data = useAppSelector((state: AppState) => state.rootReducer.article)
    console.log(`셀렉터 데이터 ` + JSON.stringify(data))

    const [ info, setInfo ] = useState<Array<Article>>([])
    const dispatch = useAppDispatch()
    
    useEffect(()=> {    
      const token = localStorage.getItem('loginSuccessUser')
      loadUserApi({token}).then(data =>{
        const userId: {} ={userId : data.userId} 
        console.log(typeof(userId))
        dispatch(fetchMyBoard(userId))
        setInfo(data.articles)
      }
      )
    }, [])
console.log(JSON.stringify(info))
return (<div> 
    <div text-align = "center">
        <h1 className='text-center'># 내 게시글</h1>
    </div>
    <div className='container'>
     
    {info.map((x: Article) =>
     
    <div className='col-12'>
      <div className=" card mb-3 m-4">
        <img src={x.picture} className="card-img-top" alt="" /><div className="card-body m-3">
        <h5 className="card-title">{x.title}</h5>
        <p className="card-text">{x.content}</p>
        <p className="card-text">{x.height}, {x.weight}</p>
        <p className="card-text">
          <small className="text-muted">{x.writtenDate}</small>
        </p>
      </div>
      <div className='text-start'>
       
      </div>
      <div>
        
        <div className='col-6 col-sm-12 text-lg-end text-center'>
          
          <button type='button' className='btn btn-outline-danger btn-sm m-3 col-3'>
          <p>
            <small>게시물 삭제</small>
          </p>
          
          </button>
          
        </div>
        </div>
        </div>
        </div>
        
        )}
          </div>
        
    </div>)
}
export default MyBoardList