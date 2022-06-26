import React, {useState} from 'react'
import { useAppDispatch } from '@/hooks'
import { useDispatch } from 'react-redux'
import {  User, userActions } from '@/modules/users/join'
const Join: React.FC = () => {
    
  const [user, setUser] =useState<User>({
    username:'', password:'', email:'', name:'', phone:'', birth:'', nickname:''
})

const dispatch = useAppDispatch();

const handleChange = (e: { preventDefault: () => void; target: { name: string; value: string } }) =>{
    e.preventDefault()
    const {name, value} = e.target;
    setUser({...user,[name]: value})
}

    return(
    <>
    <form onSubmit={
      e => {
        e.preventDefault()
        dispatch(userActions.joinRequest(user))
        console.log(JSON.stringify(user))
        setUser({
          username:'', password:'', email:'', name:'', phone:'', birth:'', nickname:''
        })
      }
    }>
        <h4 className="h4 mb-3 fw-normal">Clozet의 회원이 되어주세요!</h4>
    <div className = 'd-grid gap-2'>
      <div className="form-floating">
        <input onChange = {handleChange} type="text" className="form-control" id="username" name = "username" placeholder='UserID'  />
        <label htmlFor="floatingUserName"><h5>User ID</h5></label>
      </div>
      <div className="form-floating">
        <input onChange = {handleChange} type="password" className="form-control" id="password" name = "password" placeholder="Password" />
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
      <button className="w-100 btn btn-lg btn-outline-secondary" >
        <h4>Sign Up</h4>
        </button>
        <div className="custom-control custom-checkbox">
            <input type="checkbox" className="custom-control-input" id="aggrement" required/>
            <label className="custom-control-label" htmlFor="aggrement">개인정보 수집 및 이용에 동의합니다.</label>
          </div>
        </div>  
            <p className="mt-5 mb-3 text-muted">&copy; clozet 2022</p>
    </form>    
    </>)
}
export default Join