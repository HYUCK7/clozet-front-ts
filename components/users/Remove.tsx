import React from 'react'

type Props = {
  handleChange : (e : React.FormEvent<HTMLInputElement>) => void;
  handleSubmit : (e: React.FormEvent<HTMLFormElement>) => void;
}

const Remove: React.FC<Props> = ({handleChange, handleSubmit}: Props) => {
  return (
   <div>
    <form onSubmit = {handleSubmit}>
    <h1>정말 삭제하시겠습니까?</h1>
    <h5>삭제를 위해서 계정 아이디를 입력해주세요.</h5> 
    <div className="input-group mb-3">
        <span className="input-group-text">
          <h5>삭제할 계정 아이디</h5>
          </span>
        <input onChange={handleChange} type="text" className="form-control" placeholder="계정 아이디" name = "username" />
        <button type='submit' className='btn btn-danger'>
          <h5>delete</h5>
        </button>
      </div>
      </form>
   </div>
  )
}

export default Remove