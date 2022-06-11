import React, { useEffect, useRef } from 'react'



function handleCredentialResponse  (response : any)  {
  console.log("ENCODED JWT ID TOKEN" + response.credential)
} 

  window.onload = function () {
    google.accounts.id.initialize({
      client_id: "44815761184-9k90jdnp4r85uo4mcrsh4mqbabbeu7l5.apps.googleusercontent.com",
      callback: handleCredentialResponse
    })
  

  google.accounts.id.renderButton(
    document.getElementById( "#buttonDiv" )!,
    {
      theme: "outline", size: "large",
      type: 'standard'
    }
    
  );
}
  
  

const Login : React.FC =  () => {  
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
    <div id = "buttonDiv"></div>
      </>
  )
}

export default Login




