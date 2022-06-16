import React from 'react'

type Props = {}

const AddQna = (props: Props) => {
  return (
    <div text-align = "center">
    <h3>CLOZET QnA</h3>
    <h5>닉네임<input type="text" name="nickname" size={10}></input>  </h5>
    <h5>제목<input type="text" name="nickname" size={40}></input>  </h5>
    <h5>문의내용  </h5>
    <textarea name="questions" rows={10} cols={80}></textarea>
    <button>문의하기</button>
    </div>    
  )
}

export default AddQna