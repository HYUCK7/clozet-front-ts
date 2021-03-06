import { loadUserApi } from '@/modules/apis/user'
import { User } from '@/modules/types'
import React, { useEffect, useState } from 'react'

type Props ={
  handleChange : (e : React.FormEvent<HTMLInputElement> ) => void;
  handleSubmit : (e : React.FormEvent<HTMLFormElement>) => void;
  handleClick : (e : React.MouseEvent< HTMLButtonElement> ) => void;
}

const Mypage: React.FC<Props> = ({handleChange, handleSubmit, handleClick} : Props) => {
  const [userInfo, setUserInfo] = useState<Array<User>>([])
  
  useEffect(() => { 
    const token = localStorage.getItem('loginSuccessUser')
    loadUserApi({token}).then(data => {
    setUserInfo([data])
    console.log('MyPage 데이터 불러오기 성공')
  })}, [])
    
  return (<div>
    <div className="container">
    <div className="input-form-backgroud row">
      <div className="input-form col-md-12 mx-auto">
        <h4 className="mb-3">MY PAGE</h4>
        <form onSubmit={handleSubmit}>
        {userInfo.map(( user: User ) =>
        <>
          <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name">
                <h5>아이디 수정</h5>
                </label>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
        내 아이디 : {user.username}
                    </button>
                  </h2>
                    <div id="collapseOne" className="accordion-collapse collapse " aria-labelledby="headingOne" >
                      <div className="accordion-body">
                        <div className='row'>
                        <div className='col-md-6 mb-6'>
                        <h5>수정할 아이디 입력</h5>
                        </div>
                        <div className='col'>
                        <h5><input name='username' onChange={handleChange}/></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="name"><h5>패스워드 수정</h5></label>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
        패스워드 수정 시 확인 필요
                    </button>
                  </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse " aria-labelledby="headingOne" >
                      <div className="accordion-body">
                      <div className='row'>
                        <div className='col-md-6 mb-6'>
                        <h5>변경 전 패스워드 입력</h5>
                        </div>
                        <div className='col'>
                        <h5><input/></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
  
          <div className="mb-3">
            <label htmlFor="email"><h5>이메일 수정</h5></label>
              <div className="accordion" id="accordionExample3">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="true" aria-controls="collapseThree">
        내 이메일 : {user.email}
                    </button>
                  </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      <div className='row'>
                        <div className='col-md-6 mb-6'>
                        <h5>수정할 이메일 입력</h5>
                        </div>
                        <div className='col'>
                        <h5><input name='email' onChange={handleChange}/></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
            <div className="col-md-6 mb-3">
              <label htmlFor="name"><h5>이름 수정</h5></label>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingOne">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefour" aria-expanded="true" aria-controls="collapsefour">
        내 이름 : {user.name}
                    </button>
                  </h2>
                    <div id="collapsefour" className="accordion-collapse collapse " aria-labelledby="headingOne" >
                      <div className="accordion-body">
                      <div className='row'>
                        <div className='col-md-6 mb-6'>
                        <h5>수정할 이름 입력</h5>
                        </div>
                        <div className='col'>
                        <h5><input name='name' onChange={handleChange}/></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
            <div className="col-md-6 mb-3">
              <label htmlFor="name"><h5>닉네임 수정</h5></label>
              <div className="accordion" id="accordionExample">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingTwo">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsefive" aria-expanded="true" aria-controls="collapsefive">
        내 닉네임 : {user.nickname}
                    </button>
                  </h2>
                    <div id="collapsefive" className="accordion-collapse collapse " aria-labelledby="headingOne" >
                      <div className="accordion-body">
                      <div className='row'>
                        <div className='col-md-6 mb-6'>
                        <h5>수정할 닉네임 입력</h5>
                        </div>
                        <div className='col'>
                        <h5><input name='nickname' onChange={handleChange}/></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                 </div>
              </div>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="email"><h5>전화번호 수정</h5></label>
              <div className="accordion" id="accordionExample3">
                <div className="accordion-item">
                  <h2 className="accordion-header" id="headingThree">
                    <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapsesix" aria-expanded="true" aria-controls="collapsesix">
        {user.phone}
                    </button>
                  </h2>
                    <div id="collapsesix" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                      <div className="accordion-body">
                      <div className='row'>
                        <div className='col-md-6 mb-6'>
                        <h5>수정할 전화번호 입력</h5>
                        </div>
                        <div className='col'>
                        <h5><input name='phone' onChange={handleChange}/></h5>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
          
          <hr className="mb-4 "/>
          <div className='row'>
          <div className="col-md-6 mb-4">
          <button className="btn btn-secondary btn-lg btn-block" >
            <h5>Account Update</h5>
            </button>
           &nbsp; 
           
          <button className="btn btn-danger btn-lg btn-block" onClick={handleClick}>
            <h5>Account Delete</h5>
          </button>  
         
          </div>
          </div>
          </>
          )}
        </form>
      </div>
    </div>
      </div>
      </div>
  )
}

export default Mypage
