import React from 'react'

type Props = {}

const FindUserName: React.FC = (props: Props) => {
  return (
    <form>
      <h4 className="h4 mb-3 fw-normal">내 계정 ID 찾기</h4>
    <div className='container row align-items-center'>

      <div className = 'd-grid gap-2 col-md-3 auto'>
        
      <div className="form-floating">
        <input type="username" className="form-control" id="floatingInput" placeholder='UserID' minLength={4} maxLength={20} />
        <label htmlFor="floatingInput"><h5>가입한 E-mail</h5></label>
      </div>

      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword"><h5>Phone Number</h5></label>
      </div>

    </div>

      <button className="w-100 btn btn-lg btn-outline-secondary" type="submit">
        <h4>다음</h4>
        </button>

      </div>
    </form> 
    /** 
    <div text-align = "middle">
            <h3   id='signup_title'>CLOZET 아이디 찾기</h3>
        <div>
          <div id='signup_section'>
            <div  >
              <h5  > 이름 </h5>
              <input type='text' placeholder="이름" maxLength={10} name='signup_name' />
            </div>

            <div>
              <h5  > 생년월일 </h5>
              <input type='text' placeholder="6자" maxLength={6} name='signup_birthday'  /> - 
              <input type='text' placeholder="1자" maxLength={1} name='signup_sex'  /> ******
            </div>
            <div>
              <h5> 전화번호 </h5>
              <input type='text' maxLength={3} name='signup_phone'  /> - 
              <input type='text' maxLength={4} name='signup_phone'  /> - 
              <input type='text' maxLength={4} name='signup_phone'  /> 
            </div>
            <div>
              <h5> 이메일 </h5>
              <input type='text' placeholder="이메일" maxLength={15} name='signup_email'  /> @
              <select name='signup_email_select'  >
                <option value='gmail.com'> gmail.com </option>
                <option value='naver.com'> naver.com </option>
                <option value='write'> 직접 입력 </option>
                        </select>
                <button type='button'>인증번호 전송</button>
                <div>
              <input type='text' placeholder="인증번호 확인" maxLength={4} name='checkpw'/> <button type='button'>인증번호 확인</button>         
              </div>
            </div>
          </div>
        </div>
        <div>
          <input type='button' value='가입하기' name='sigunup_submit'/>
        </div>
      </div>
  */)
}

export default FindUserName