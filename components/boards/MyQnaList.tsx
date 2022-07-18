import React from 'react'

type Props = {}

const MyQnaList = (props: Props) => {
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
    
    </tbody>
  </table>
  </div>
  )
}

export default MyQnaList