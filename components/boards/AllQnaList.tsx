import React from 'react'

type Props = {}

const AllQnaList = (props: Props) => {
    return (
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
      </tr>
    </thead>
    <tbody>
      
    </tbody>
  </table>
  )
}

export default AllQnaList