import React from 'react'
import './Login.css'

const Login = () => {


  return (
    <>
   

   <div className="login-container">

      <div className="login-box">
        <h2 className="login-title">Login</h2>

        <form className="login-form">
          <input
            type="email"
            placeholder="Email"
            className="input-field"
          />
          <input
            type="password"
            placeholder="Password"
            className="input-field"
          />
          <button type="submit" className="submit-btn">Login</button>
        </form>
        
        <p className="signup-link">
          Don't have an account?{' '}
          <a href="#" className="link">Sign up</a>
        </p>
      </div>
    </div>

    
    </>
  )
}

export default Login