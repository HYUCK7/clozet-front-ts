import React from 'react'

type Props = {
  onChange : (e: React.FormEvent<HTMLInputElement> | any ) => void
  onSubmit : (e: React.FormEvent<HTMLFormElement> ) => void
}

const AddBoard: React.FC<Props> = ({onChange, onSubmit}) => {
  return (
    <div>
<div className='container'>
    <div text-align = "center">
        <h3>내 게시물 올리기</h3>
    </div>
      <div>
          <h4>추천 복장을 입고 업로드해보세요.</h4><br/>
      </div>
        </div>
    <form onSubmit={onSubmit}>
        <div className='container'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            <h5>제목 입력</h5>
            </span>
          <input onChange = {onChange} name = "title" type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

          <div className="input-group mb-3">
            <h3>
              <input onChange = {onChange} name = "picture" type="file" className="form-control" id="inputGroupFile02" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </h3>
          </div>
          <br/>
          <div className="input-group">
            <span className="input-group-text">
              <h5>키와 몸무게를 적어주세요</h5>
            </span>
            <input onChange = {onChange} name ="height"  type="number" aria-label="height" className="form-control"/>
            <input onChange = {onChange} name ="weight" type="number" aria-label="weight" className="form-control"/>
          </div>
          <div className="input-group">
              <span className="input-group-text">
              <h5>
                문구 입력...
              </h5>
              </span>
              <textarea name = "content" onChange = {onChange} className="form-control" aria-label="With textarea"></textarea>
            </div>            
          </div>    
            
          <button  className="w-100 btn btn-lg btn-outline-secondary" type="submit">
          UPLOAD
          </button>

          </form>
          </div>
    
  )
}

export default AddBoard