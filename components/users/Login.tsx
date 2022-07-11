import React, { useRef } from 'react'

type Props = {
  handleChange : (e : React.FormEvent<HTMLInputElement> ) => void;
  handleSubmit : (e : React.FormEvent<HTMLFormElement>) => void;
}

const Login : React.FC<Props> =  ({handleChange, handleSubmit} : Props) => {
  const usernameRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  
  return (
    <>
    <form onSubmit={handleSubmit}>
      <h4 className="h4 mb-3 fw-normal">로그인 후 이용 가능합니다.</h4>
      <div className = 'd-grid gap-2'>
      <div className="form-floating">
        <input ref = {usernameRef} onChange={handleChange} name = "username" type="username" className="form-control" id="username" placeholder='UserID'  />
        <label htmlFor="floatingInput"><h5>User ID</h5></label>
      </div>
      <div className="form-floating">
        <input ref = {passwordRef} onChange={handleChange} name = "password" type="password" className="form-control" id="password" placeholder="Password" />
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

      <button  className="w-100 btn btn-lg btn-outline-secondary"  disabled = { usernameRef === null }>
        <h4>Sign in</h4>
        </button>
      </div>
            <p className="mt-5 mb-3 text-muted">&copy; clozet 2022</p>
    </form> 
      </>
  )
}

export default Login




