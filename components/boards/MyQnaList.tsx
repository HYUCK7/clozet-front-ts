import { fetchMyQnaApi } from '@/apis/articleApi'
import { useAppDispatch } from '@/hooks'
import { fetchMyQna } from '@/modules/boards/qna'
import { AppState, useAppSelector } from '@/modules/store'
import { Article } from '@/pages/boards/addBoard'
import React, { useEffect, useState } from 'react'

type Props = {}

const MyQnaList:React.FC = () => {
  const [send, setSend] = useState<Article>({token: '', open: ''})
  const [myQna, setMyQna] = useState<Array<Article>>([])
  const dispatch = useAppDispatch()
  
  
  useEffect(()=> {
    const token = localStorage.getItem('loginSuccessUser')
    setSend({token: token, open: 'true'})
    send.token !== '' ? dispatch(fetchMyQna(send)) : null
  }, [send.token]) // 의존성으로 default 값 안나오게 디스패치 보내기

  const {data} = useAppSelector((state: AppState) => state.rootReducer.qna)
  console.log(`>>${JSON.stringify(data)}`)
  


  return (
    <div className='container'>
    <table className="table table-hover caption-top">
    <caption>
      <p>문의 목록</p>
    </caption>
    <thead>
      <tr>
        <th scope="row">
          <p>작성일자</p>
        </th>
        <td>
          <p><strong>계정</strong></p>
        </td>
        <td> 
          <p><strong>제목</strong></p>
       </td>
       <td> 
          <p><strong>질의내용</strong></p>
       </td>
       <td> 
          <p><strong>공개 상태</strong></p>
       </td>
      </tr>
    </thead>
    {data.map((x: Article) =>
    <tbody>
    
    </tbody>
    )}
  </table>
  </div>
  )
}

export default MyQnaList