
import { useScript } from '@/hooks'
import React, { useEffect, useRef } from 'react'

/** 
function handleCredentialResponse  (response : any)  {
  console.log("ENCODED JWT ID TOKEN" + response.credential)
}
  if(typeof window !== "undefined"){
  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "44815761184-9k90jdnp4r85uo4mcrsh4mqbabbeu7l5.apps.googleusercontent.com",
      callback: handleCredentialResponse
    })
    google.accounts.id.renderButton(
    document.getElementById("#buttonDiv")!,
    {
      theme: "outline", size: "large",
      type: 'standard'
    });
  }
*/
type Props = {
  handleChange : (e : any) => void;
  handleSubmit : (e : any) => void;
}

const Login : React.FC<Props> =  ({handleChange, handleSubmit}) => {
  return (
    <>
    <form>
      <h4 className="h4 mb-3 fw-normal">로그인 후 이용 가능합니다.</h4>
      <div className = 'd-grid gap-2'>
      <div className="form-floating">
        <input onChange={handleChange} type="username" className="form-control" id="loginUsername" placeholder='UserID' minLength={4} maxLength={20} />
        <label htmlFor="floatingInput"><h5>User ID</h5></label>
      </div>
      <div className="form-floating">
        <input onChange={handleChange} type="password" className="form-control" id="loginPassword" placeholder="Password" />
        <label htmlFor="floatingPassword"><h5>Password</h5></label>
      </div>

      <div className="checkbox mb-3">
        <label>
        <h6>
          <input type="checkbox" value="remember-me" /> Remember me</h6>
        </label>
      </div>
    </div>
      <div className = 'd-grid gap-2'>
      <button onSubmit={handleSubmit} className="w-100 btn btn-lg btn-outline-secondary" type="submit">
        <h4>Sign in</h4>
        </button>
      </div>
            <p className="mt-5 mb-3 text-muted">&copy; clozet 2022</p>
    </form> 
    
      </>
  )
}

export default Login




