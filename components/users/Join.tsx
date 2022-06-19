import React, {useState} from 'react'
import {IRegister} from '@/types'
import { useAppDispatch } from '@/hooks'
import { useDispatch } from 'react-redux'
import {  User, userActions } from '@/modules/users'
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
const Join: React.FC = () => {
    
  const [user, setUser] =useState<User>({
    username:'', password:'', email:'', name:'', phone:'', birth:'', nickname:''
})
const dispatch = useDispatch()
const handleChange = (e: { preventDefault: () => void; target: { name: string; value: string } }) =>{
    e.preventDefault()
    const {name, value} = e.target;
    setUser({...user,[name]: value})
}

    return(
    <>
    <form onSubmit={
      e=> {
        e.preventDefault()
        dispatch(userActions.joinRequest(user))
        setUser({
          username:'', password:'', email:'', name:'', phone:'', birth:'', nickname:''
        })
      }
    }>
        <h4 className="h4 mb-3 fw-normal">Clozet의 회원이 되어주세요!</h4>
    <div className = 'd-grid gap-2'>
      <div className="form-floating">
        <input onChange = {handleChange} type="text" className="form-control" id="username" name = "username" placeholder='UserID' minLength={4} maxLength={20} />
        <label htmlFor="floatingUserName"><h5>User ID</h5></label>
      </div>
      <div className="form-floating">
        <input onChange = {handleChange} type="text" className="form-control" id="password" name = "password" placeholder="Password" />
        <label htmlFor="floatingPassword"><h5>Password</h5></label>
      </div>
      <div className="form-floating">
        <input onChange = {handleChange} disabled type="text" className="form-control" id="passwordCheck" name = "passwordCheck" placeholder="Password Check" />
        <label htmlFor="floatingPassword"><h5>Password Check</h5></label>
      </div>
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
      <button className="w-100 btn btn-lg btn-outline-secondary" type="submit">
        <h4>Sign Up</h4>
        </button>
        </div>  
            <p className="mt-5 mb-3 text-muted">&copy; clozet 2022</p>
    </form>    
    </>)
}
export default Join