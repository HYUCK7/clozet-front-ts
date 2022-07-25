import Image from 'next/image';
import React from 'react'

type Props = {
  handleChange : (e : React.FormEvent<HTMLInputElement> | React.FormEvent<HTMLTextAreaElement>) => void;
  handleSubmit : (e : React.FormEvent<HTMLFormElement>) => void;
  checkChange: (e : React.ChangeEvent<HTMLInputElement>) => void;
  nickname: string | undefined
}

const AddQna = ({handleChange, handleSubmit, checkChange, nickname}: Props) => {
  const date = new Date();
  const parseDate = date.toDateString()
  return (
    <div className = 'container'>
      <div className="py-5 text-center">
        <Image className="d-block mx-auto mb-4" src="/clozet-black.svg" alt="" width="150" height=""/>
        <h2>{ nickname }님 !</h2>
        <h2>clozet 이용 불편사항을 말해주세요 !</h2>
        <p className="lead">저희 웹 이용 불편사항, 문의사항을 신속하게 처리해드리겠습니다.</p>
      </div>
      
      <form onSubmit = { handleSubmit }>
        <div>
        <div className="input-group ">
          <span className="input-group-text" id="inputGroup-sizing-default">
          <p>제목</p>
          </span>
          <input onChange={handleChange} name = 'title'  type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>
        
        <div className="form-check ">
          <input onChange={checkChange} className="form-check-input" value='true' type="checkbox" name='open' id="flexCheckDefault"/>
          <label className="form-check-label" htmlFor="flexCheckDefault">
             <p>비공개 설정</p>
          </label>
        </div>
        
        </div> 
        
        <div className="input-group input-group-lg mb-3">
          <span className="input-group-text"><p>Content</p></span>
          <textarea name='content' onChange = {handleChange} className="form-control" aria-label="With textarea"></textarea>
        </div>

        <button className="w-100 btn btn-lg btn-outline-secondary" >
            <h4>등록</h4>
        </button>
        </form>
    </div>
  )
}

export default AddQna