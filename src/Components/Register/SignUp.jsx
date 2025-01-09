import React from 'react'
import './SignUp.css'


const SignUp = () => {
  return (
   <>
   
   <div className="container">
      <div className="form-container">
        <h2 className="text-2xl font-semibold text-center mb-6">Registration Form</h2>
        
        <form>
          <div className="mb-4">
            <label htmlFor="name" className="label">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Enter your name"
              className="input-field"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="email" className="label">Email</label>
            <input
              type="email"
              id="email"
              placeholder="Enter your email"
              className="input-field"
            />
          </div>

          <div className="mb-4">
            <label htmlFor="password" className="label">Password</label>
            <input
              type="password"
              id="password"
              placeholder="Enter your password"
              className="input-field"
            />
          </div>

          <button type="submit" className="button">
            Register
          </button>

        </form>


      </div>
    </div>
  

   </>
  )
}

export default SignUp