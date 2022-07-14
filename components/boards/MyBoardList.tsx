import { loadUserApi } from '@/apis/userApi'
import { useAppDispatch } from '@/hooks'
import { fetchMyBoard } from '@/modules/boards'
import { AppState, useAppSelector } from '@/modules/store'
import React, { useEffect, useState } from 'react'
import { Article } from './AllBoardList'

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
        <h1># 내 게시글</h1>
    </div>
    {info.map((x: Article) =>
    <>
    <div className="card mb-3">
         <img src={x.picture} className="card-img-top" alt=""/>
    <div className="card-body">
            <h5 className="card-title">{x.title}</h5>
            <p className="card-text">{x.content}</p>
            <p className="card-text">{x.height}, {x.weight}</p>
            <p className="card-text">
              <small className="text-muted">{x.writtenDate}</small>
            </p>
    </div>
    <button type='button' className='btn btn-outline-danger btn-sm'>
          <p><small>게시물 삭제</small></p>
    </button>
    </div>
      
    </>
        )}
        
    </div>)
}
export default MyBoardList