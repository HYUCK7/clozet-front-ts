import React from 'react'

type FormData = {
    <T>(arr: T[]) : T
}

type Props = {
    reg : (e:React.FormEvent, formData: FormData) => void
}

const Register: React.FC<Props> = ({reg}) => {
  return (
    <div>
        <title>Clozet 회원가입</title>
        <form>
            <div className='register-form'> 
                <h5>계정 아이디</h5>
                <input name='regId' placeholder='ID' type='text' maxLength={20} onChange = {onchange}/>
                <h5>비밀번호</h5>
                <input/>
            </div>
        </form>
    </div>
  )
}