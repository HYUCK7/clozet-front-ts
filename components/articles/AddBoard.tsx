import React from 'react'

type Props = {}

const AddBoard = (props: Props) => {
  return (
    <form>
<div className='container'>
    <div text-align = "center">
        <h3>내 게시물 올리기</h3>
    </div>
      <div>
          <h4>추천 복장을 입고 업로드해보세요.</h4><br/>
      </div>
</div>
        <div className='container'>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            <h5>제목 입력</h5>
            </span>
          <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
        </div>

          <div className="input-group mb-3">
            <h3>
              <input type="file" className="form-control" id="inputGroupFile02" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
            </h3>
          </div>
          <br/>

            
          <div className="input-group">
              <span className="input-group-text">
              <h5>
                문구 입력...
              </h5>
              </span>
              <textarea className="form-control" aria-label="With textarea"></textarea>
            </div>            
          </div>      
          <button></button>
     </form>     
    
  )
}

export default AddBoard