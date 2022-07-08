import React, {useCallback, useEffect, useState} from 'react'
import { useAppDispatch } from '@/hooks'
import { useDispatch } from 'react-redux'
import {  User, userActions } from '@/modules/users/join'
import { checkIdRequest } from '@/modules/users/check'

export interface UsernameType{
  username: string
}

export interface CompareType {
  checkIdValue: string,
  checkPwValue: string
}

const Join: React.FC = () => {

  const [user, setUser] =useState<User>({
    username:'', password:'', email:'', name:'', phone:'', birth:'', nickname:''
})
  const [username, setUsername] = useState<UsernameType>({username: ''}) // 아이디 중복확인
  const [check, setCheck] = useState<CompareType>({checkIdValue: '', checkPwValue: ''})
  const [pwCheck, setPwCheck] = useState(0)

const dispatch = useAppDispatch();

const handleChange = (e: { preventDefault: () => void; target: { name: string; value: string } }) =>{
    e.preventDefault()
    const {name, value} = e.target;
    setUser({...user, [name]: value})
}

const handleSubmit = (e : React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      dispatch(userActions.joinRequest(user)) // 리퀘스트 객체를 생성해라 요청 시 객체이름은 request, 또는 response
      console.log(JSON.stringify(user))       // 타입이 {} JSON
      window.location.href = ('/')
}

const idCheckChange = (e : React.FormEvent<HTMLInputElement>) => {
  e.preventDefault()
  const {name, value} = e.currentTarget
  setUsername({...username, [name]: value})
}

const pwCheckChange = (e : React.FormEvent<HTMLInputElement>) => {
  e.preventDefault
  
  const { name, value} = e.currentTarget
  setCheck ({ ...check, [name] : value })

  console.log(`비밀번호 체크 : ${JSON.stringify(user.password)}`)
  console.log(`비교 비밀번호 체크 : ${JSON.stringify(check.checkPwValue)}`)
  useEffect(() => {
  const comparePwValue = user.password === check.checkPwValue ? setPwCheck(1) : setPwCheck(2)
  return comparePwValue
}, [check.checkPwValue])
}
//const passwordRegex = /^(?=.*[a-zA-Z])(?=.*[!@#$%^*+=-])(?=.*[0-9]).{8,25}$/
const idCheck = (e : React.MouseEvent<HTMLButtonElement>) => {
  e.preventDefault()
  console.log(`중복 체크 아이디 : ${JSON.stringify(username)}`)
  dispatch(checkIdRequest(username))
}


    return(
    
    <form onSubmit = { handleSubmit } >
        <h4 className="h4 mb-3 fw-normal">Clozet의 회원이 되어주세요!</h4>
    <div className = 'd-grid gap-2'>
      <div className="form-floating">
        <input onChange = {handleChange} type="text" className="form-control" id="username" name = "username" placeholder='UserID'  />
        <label htmlFor="floatingUserName"><h5>User ID</h5></label>
      </div>
       
      <div className='form-floating'>
      <input onChange={idCheckChange} name = "username" className='form-control' id = "checkId"/>
      <label htmlFor='floatingCheckUsername'>
        <h5>ID 중복확인</h5>
      </label>
      </div>
      <button onClick={idCheck} name="checkButton" className='btn btn-primary btn-sm'>
              <h5>ID Check</h5>
      </button>
        
      <div className="form-floating">
        <input onChange = {handleChange} type="password" className="form-control" id="password" name = "password" placeholder="Password" />
        <label htmlFor="floatingPassword"><h5>Password</h5></label>
      </div>
      <div className="form-floating">
        <input onChange = {pwCheckChange} type= 'password' className="form-control" id="passwordCheck" name = "checkPwValue" placeholder="Password Check" />      
        <label htmlFor="floatingPassword"><h5>Password Check</h5></label>
      </div>
      <p>{pwCheck === 0 ? '':(pwCheck === 1 ? "일치합니다." : "비밀번호를 확인해주세요.") }</p>
      
      <div className="form-floating">
        <input onChange = {handleChange} type="text" className="form-control" id="birth" name = "birth" placeholder="생년월일" />
        <label htmlFor="floatingBirth"><h5>birth</h5></label>
      </div>
      <div className="form-floating">
        <input onChange = {handleChange} type="text" className="form-control" id="name" name = "name" placeholder="Name" />
        <label htmlFor="floatingName"><h5>Name</h5></label>
      </div>
      <div className="form-floating">
        <input onChange = {handleChange} type="text" className="form-control" id="nickname" name='nickname' placeholder="NickName" />
        <label htmlFor="floatingNickName"><h5>NickName</h5></label>
      </div>
      <div className="form-floating">
        <input onChange = {handleChange} type="text" className="form-control" id="email" name='email' placeholder="E-mail" />
        <label htmlFor="floatingPassword"><h5>E-Mail</h5></label>
      </div>
      <div className="form-floating">
        <input onChange = {handleChange} type="text" className="form-control" id="phone" name='phone' placeholder="Phone Number" />
        <label htmlFor="floatingPhone"><h5>Phone Number</h5></label>
      </div>
      
      <button className="w-100 btn btn-lg btn-outline-secondary" type='submit'>
                <h4>Sign Up</h4>
      </button>
      <div className="custom-control custom-checkbox">
        <input type="checkbox" className="custom-control-input" id="aggrement" required />
        <label className="custom-control-label" htmlFor="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
          </div>
        </div>  
        
            <p className="mt-5 mb-3 text-muted">&copy; clozet 2022</p>
    </form>    
    )
}
export default Join

//Warning: validateDOMNesting(...): <form> cannot appear as a descendant of <form>
// form tag 중복 시 - hydration