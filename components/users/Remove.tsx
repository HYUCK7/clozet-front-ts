import React from 'react'

type Props = {}

const Remove = (props: Props) => {
  return (
   <div>
    <h1 align-middle>정말 삭제하시겠습니까?</h1>
    <h5>삭제를 위해서 계정 아이디를 입력해주세요.</h5> 
    <div className="input-group mb-3">
        <span className="input-group-text" id="basic-addon1">삭제할 계정 아이디</span>
        <input type="text" className="form-control" placeholder="Username" aria-label="Username" aria-describedby="basic-addon1"/>
        <button>삭제하기</button>
      </div>
   </div>
  )
}

export default Remove