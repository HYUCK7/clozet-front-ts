import { findMyQna } from '@/modules/apis/article'
import { Article } from '@/modules/types'
import React, { useEffect, useState } from 'react'

const MyQnaList:React.FC = () => {
  const [myQna, setMyQna] = useState<Array<Article>>([])
  
  useEffect(()=> {
    const token = localStorage.getItem('loginSuccessUser')
    findMyQna({articleId : 0, token: token, open: 'true'}).then(data => {
    setMyQna(data)
    })
  }, []) 

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
   
    <tbody>
    {myQna.map((x: Article) =>
      <tr key = {x.articleId}>
        <td>{x.writtenDate}</td>
        <td>{x.nickname}</td>
        <td>{x.title}</td>
        <td>{x.content}</td>
        <td>{x.open === 'true'? '공개':'비공개'}</td>
      </tr>
    )}
    </tbody>
      
  </table>
  </div>
  )
}

export default MyQnaList