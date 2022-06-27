import React from 'react'

type Props = {
  handleFindId : (e : React.FormEvent<HTMLInputElement>) => void;
  handleFindPw : (e : React.FormEvent<HTMLInputElement>) => void;
  submitFindId : (e : React.FormEvent<HTMLFormElement>) => void;
  submitFindPw : (e : React.FormEvent<HTMLFormElement>) => void;
}

const FindAccount: React.FC<Props> = ({handleFindId, handleFindPw, submitFindId, submitFindPw} : Props) => {
  return (    
    <div>
      <h4 className="h4 text-center mb-3 fw-normal my-3">내 계정 정보 찾기</h4>
        <div className='container'>
          <div className=' row justify-content-between '>

          <div className='col-md-6 auto px-5'>
            <h4 className="h4 text-center mb-3 fw-normal my-5">계정 아이디 찾기</h4>
            <form onSubmit={submitFindId}>
              <div className = 'd-grid gap-2'>
                
      <div className="form-floating ">
        <input onChange = {handleFindId} name = "name" type="name" className="form-control" id="inputName" placeholder='Name'/>
        <label htmlFor="floatingInput"><h5>가입하신 이름</h5></label>
      </div>

      <div className="form-floating">
        <input onChange = {handleFindId} name = "email" type="email" className="form-control" id="inputEmail" placeholder='E-mail'/>
        <label htmlFor="floatingInput"><h5>가입한 E-mail</h5></label>
      </div>

      

      <button className="w-100 btn btn-lg btn-outline-secondary" type="submit">
        <h4>다음</h4>
        </button>
            </div>
          </form>
        </div>

      <div className='col-md-6 auto px-5'>
        <h4 className="h4 text-center mb-3 fw-normal my-5">비밀번호 찾기</h4>
        <form onSubmit = {submitFindPw}>
          <div className = 'd-grid gap-2'>
      <div className="form-floating">
        <input onChange = {handleFindPw} name = "username" type="name" className="form-control" id="inputName" placeholder='Name'/>
        <label htmlFor="floatingInput"><h5>내 아이디</h5></label>
      </div>

      <div className="form-floating">
        <input onChange = {handleFindPw} name = "email" type="email" className="form-control" id="inputEmail" placeholder='E-mail'/>
        <label htmlFor="floatingInput"><h5>가입한 E-mail</h5></label>
      </div>

      <button  className="w-100 btn btn-lg btn-outline-secondary" type="submit">
        <h4>다음</h4>
        </button>
              </div>
              </form>
            </div>
          </div>
       </div>
    </div>
    
    )
}

export default FindAccount