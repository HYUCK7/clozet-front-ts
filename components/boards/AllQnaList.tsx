import React from 'react'

type Props = {}

const AllQnaList = (props: Props) => {
    return (< div text-align = "center" >
    <h3 >문의사항    </h3> 
     <select name='title'>
            <option value='gmail.com'> 전체 </option>
            <option value='naver.com'> 내가 쓴 문의 </option>
            <option value='write'> 공개된 문의 </option>
                    </select>
    <button type='button'>문의하기</button>
   <table border={1}>
  <thead>
    <tr>
      <th>번호</th>
                <th>닉네임  
                </th>
      <th>제목</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <th>1</th>
      <td>자바</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;옷 등록은 어떻게 하나요?&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
            </tr>
            <tr>
      <th>2</th>
      <td>파이썬</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;등록한 옷을 어떻게 삭제하나요?&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
            </tr>
              <tr>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
            </tr>
            <tr>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
            </tr>
            <tr>
      <th>&nbsp;&nbsp;&nbsp;&nbsp;</th>
      <td>&nbsp;&nbsp;&nbsp;&nbsp;</td>
                <td>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                </td>
            </tr>
            
   
  </tbody>
  </table>
    </div>
  )
}

export default AllQnaList