import { useScript } from '@/hooks'
import React, { useRef } from 'react'

declare const google : any

const Login : React.FC =  ( onGoogleSignin = () => {}, text = 'signin_with') => {
  const googleSignInButton = useRef(null)
  useScript('https://accounts.google.com/gsi/client', ()=>{
            // 원래, window.google로 진행해야함.
      google.accounts.id.initialize({
      clientId:'44815761184-9k90jdnp4r85uo4mcrsh4mqbabbeu7l5.apps.googleusercontent.com',
      callback: onGoogleSignin,
  })
    google.accounts.id.renderButton(
      googleSignInButton.current,
      {theme: 'filled_blue', size:'large',text },
  )
  })
  return (
    <><form>
      <h4 className="h4 mb-3 fw-normal">로그인 후 이용 가능합니다.</h4>

      <div className="form-floating">
        <input type="userName" className="form-control" id="floatingInput" placeholder='UserID' minLength={4} maxLength={20} />
        <label htmlFor="floatingInput">User ID</label>
      </div>
      <div className="form-floating">
        <input type="password" className="form-control" id="floatingPassword" placeholder="Password" />
        <label htmlFor="floatingPassword">Password</label>
      </div>

      <div className="checkbox mb-3">
        <label>
          <input type="checkbox" value="remember-me" /> Remember me
        </label>
      </div>

      <button className="w-100 btn btn-lg btn-secondary" type="submit">Sign in</button>

      <div className='row'>
        <div className='mt-2 col-lg-3'>
          <button className='btn btn-secondary'>FIND ID</button>
        </div>
        <div className='mt-2 col-lg-3'>
          <button className='btn btn-secondary'>FIND PW</button>
        </div>
        <div className='mt-2 col-lg-3'>
          <button className='btn btn-secondary'>Sign Up</button>
        </div>
      </div>
            <p className="mt-5 mb-3 text-muted">&copy; clozet 2022</p>
    </form> 
    <div id="g_id_onload"
         data-client_id="44815761184-9k90jdnp4r85uo4mcrsh4mqbabbeu7l5.apps.googleusercontent.com"
         data-login_uri="http://localhost:3000"
         data-auto_prompt="false">
      </div>
      <div className="g_id_signin"
         data-type="standard"
         data-size="large"
         data-theme="outline"
         data-text="sign_in_with"
         data-shape="rectangular"
         data-logo_alignment="left"></div>
      </>
  )
}

export default Login


