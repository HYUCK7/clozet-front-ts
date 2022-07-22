import { fetchQna } from '@/modules/apis/article'
import { Article } from '@/modules/types'
import React, { useEffect, useState } from 'react'

const AllQnaList: React.FC = () => {
  const [qnaList, setQnaList] = useState<Array<Article>>([])

  useEffect(() => { fetchQna('true').then(data =>{
    setQnaList(data)
    console.log(data)
  } ) } , [])
  
    return (
      <div className='container'>
    <table className="table table-hover caption-top">
    
    <>
    <caption>
        <p>문의 목록</p>
    </caption>
      <thead>
          <tr>
            <th scope="row">
              <p>작성일자</p>
            </th>
            <th>
              <p><strong>계정</strong></p>
            </th>
            <th>
              <p><strong>제목</strong></p>
            </th>
            <th>
              <p><strong>질의내용</strong></p>
            </th>
          </tr>
        </thead>

        <tbody>
          { qnaList.map((x : Article) => 
          <tr key = {x.articleId}>
              <td>{x.writtenDate}</td>
              <td>{x.nickname}</td>
              <td>{x.title}</td>
              <td>{x.content}</td>
          </tr>   
              )}
          
        </tbody>
        </>
    
  </table>
  </div>
  )
}


export default AllQnaList
