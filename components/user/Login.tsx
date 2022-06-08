import React from 'react'

type Props = {}

const Login = (props: Props) => {
  return (
    <div text-align = "middle">
            <h2>CLOZET 로그인</h2>
            <form>
            <div>
                <label  htmlFor='input_id'>아이디 : </label>
                <input placeholder="아이디" type='text' name='input_id'   />
            </div>
            <div>
                <label htmlFor='input_pw'>비밀번호 : </label>
                <input placeholder="비밀번호" type='password' name='input_pw'  />
            </div>
            <div>
                <button type='button'>로그인</button>
                <button type='button'>회원가입</button>
                <button type='button'>아이디 찾기</button>
                <button type='button'>비밀번호 찾기</button>
            </div>
            </form>
        </div>
  )
}

export default Login