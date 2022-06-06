import React, {useState} from 'react'
import {IRegister} from '@/types'

type Props = {
    reg : (e:React.FormEvent, formdata: IRegister) => void
}

const Register: React.FC<Props> = ({reg}) => {
    const initUser = {userName: "", name : "", email: "", password: ""}
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
                <input value ={formData.userName} name='userName' placeholder='ID' onChange = {info} type='text' maxLength={20} />
                <h5>비밀번호</h5>
                <input name='password' placeholder='PW' onChange={info} type='text' maxLength={20} />
                <h5>이름</h5>
                <input name='name' placeholder='name' onChange={info} type = 'text' maxLength={20}/>
                <h5>이메일</h5>
                <input name='email' placeholder='email' onChange={info} type = 'text' maxLength={20}/>
                <button disabled = {formData === undefined ? true:false}>등록</button>
            </div>
        </form>
    </div>
  )
}
export default Register