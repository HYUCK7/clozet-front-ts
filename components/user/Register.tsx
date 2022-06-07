import React, {useState} from 'react'
import {IRegister} from '@/types'

type FormData = { //
    // 타입은 상태가 있다고 생각했으나, 무상태. Member m = null; 이라고 헀을 때
    // 상태가 존재한다고 할 수 없음. '이렇게 써라' 를 의미하는 것이지. 메모리에 할당된 상태가 아니라는 것.
    userName: string
    password: string
    name: string
    email: string
}

type Props = {
    reg : (e:React.FormEvent, formdata: FormData) => void
}

const Register: React.FC<Props> = ({reg}) => {
    const initUser = {userName: "", password: "", name : "", email: "", nickname: "",  }
    const [formData, setFormData] = useState<IRegister>(initUser)
    const info = (e: React.FormEvent<HTMLInputElement>): void =>{
        setFormData(formData)
    }

  return (
    <div>
        <title>Clozet 회원가입</title>
        <form onSubmit={ e => reg(e, formData)}>
            <div className='register-form'> 
                <h5>계정 아이디</h5>
                <input name='userName' placeholder='ID' onChange = {info} type='text' minLength = {5} maxLength={20} />
                <h5>비밀번호</h5>
                <input name='password' placeholder='PW' onChange={info} type='text' maxLength={10} />
                <h5>비밀번호 확인</h5>
                <input name='pwCheck' placeholder='PW Check' onChange={info} type='text' maxLength={10} />
                <h5>이름</h5>
                <input name='name' placeholder='name' onChange={info} type = 'text' maxLength={10}/>
                <h5>닉네임</h5>
                <input name='nickname' placeholder='nickname' onChange={info} type = 'text' maxLength={10}/>
                <h5>이메일</h5>
                <input name='email' placeholder='email' onChange={info} type = 'text' maxLength={20}/>
                <button disabled = {formData === undefined ? true:false}>등록</button>
            </div>
        </form>
    </div>
  )
}
export default Register