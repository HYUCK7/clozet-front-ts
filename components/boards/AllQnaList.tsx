import { fetchAllQnaApi } from '@/apis/articleApi'
import React, { useEffect, useState } from 'react'
import { Article } from './AllBoardList'

type Props = {}

const AllQnaList: React.FC = () => {
  const [qnaList, setQnaList] = useState<Array<Article>>([])
  
  useEffect(() => { fetchAllQnaApi('true').then(data =>{
    setQnaList(data)
    console.log(data)
  } ) } , [])

    return (
      <div className='container'>
    <table className="table table-hover caption-top">
    {qnaList.map((x : Article) => 
    <><caption>
        <p>문의 목록</p>
      </caption><thead>
          <tr>
            <th scope="row">
              <p>{x.writtenDate}</p>
            </th>
            <td>
              <p><strong>{x.title}</strong></p>
            </td>
            <td>
              <p><strong>제목</strong></p>
            </td>
          </tr>
        </thead><tbody>

        </tbody></>
    )}
  </table>
  </div>
  )
}


export default AllQnaList