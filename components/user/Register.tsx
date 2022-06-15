import React, {useState} from 'react'
import {IRegister} from '@/types'
import { useAppDispatch } from '@/hooks'
/*
interface FormData { //
    // 타입은 상태가 있다고 생각했으나, 무상태. Member m = null; 이라고 헀을 때
    // 상태가 존재한다고 할 수 없음. '이렇게 써라' 를 의미하는 것이지. 메모리에 할당된 상태가 아니라는 것.
    username: string
    password: string
    birth: string,
    name: string,
    nickname: string,
    email: string,
    phone: string
}

type Props = {
    reg : (e:React.FormEvent, formdata: FormData) => void
}
*/

const Register: React.FC = () => {
    /** 
    const initUser = {username: "", password: "", birth: "", name : "", nickname: "", email: "", phone: ""}
    const [formData, setFormData] = useState(initUser)
    const info = (e: React.FormEvent<HTMLInputElement>): void =>{
        setFormData(formData)
    }
    */

    /** 
  return (
    <div>
        <title>Clozet 회원가입</title>
        <form >
            <div className='register-form'> 
                <h5>계정 아이디</h5>
                <input name='username' placeholder='ID' type='text' />
                <h5>비밀번호</h5>
                <input name='password' placeholder='PW' type='text' maxLength={10} />
                <h5>생일</h5>
                <input name='birth' placeholder='생년월일' type='text' maxLength={10} />
                <h5>이름</h5>
                <input name='name' placeholder='name' type = 'text' maxLength={10}/>
                <h5>닉네임</h5>
                <input name='nickname' placeholder='nickname' type = 'text' maxLength={10}/>
                <h5>이메일</h5>
                <input name='email' placeholder='E-mail'  type = 'text' maxLength={20}/>
                <h5>Phone</h5>
                <input name='phone' placeholder='PhoneNumber'  type = 'text' maxLength={20}/>
                <button type='submit'>등록</button>
            </div>
        </form>
    </div>
  )
  */
    return(
    <>
    <form>
        <h4 className="h4 mb-3 fw-normal">Clozet의 회원이 되어주세요!</h4>

      <div className="form-floating">
        <input type="text" className="form-control" id="username" name = "username" placeholder='UserID' minLength={4} maxLength={20} />
        <label htmlFor="floatingUserName"><h5>User ID</h5></label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="password" name = "password" placeholder="Password" />
        <label htmlFor="floatingPassword"><h5>Password</h5></label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="birth" name = "birth" placeholder="생년월일" />
        <label htmlFor="floatingBirth"><h5>birth</h5></label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="name" name = "name" placeholder="Name" />
        <label htmlFor="floatingName"><h5>Name</h5></label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="nickname" name='nickname' placeholder="NickName" />
        <label htmlFor="floatingNickName"><h5>NickName</h5></label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="email" name='email' placeholder="E-mail" />
        <label htmlFor="floatingPassword"><h5>E-Mail</h5></label>
      </div>
      <div className="form-floating">
        <input type="text" className="form-control" id="phone" name='phone' placeholder="Phone Number" />
        <label htmlFor="floatingPhone"><h5>Phone Number</h5></label>
      </div>
      <button className="w-100 btn btn-lg btn-secondary" type="submit">
        <h4>Sign Up</h4>
        </button>
            <p className="mt-5 mb-3 text-muted">&copy; clozet 2022</p>
    </form>    
    </>)
}
export default Register