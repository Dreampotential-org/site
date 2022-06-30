import React from 'react'
import NewNav from '../Nav/Nav'
import "./LogIn.css"
import logo from "../../assets/logo_login.png";
const LogIn = () => {
  return (
    <>
    <div class="container pt-5 mt-5">
        <NewNav/>

      <div className="row mt-5 pb-5">
        <div className="login-left col-md-6">
          <div className="div-center">
           
          </div>
        </div>
        <div className="login-right col-md-6">

            <div className='login-top pt-5'>
                <img src={logo} alt="logo"/>
                <p className='label-login'>Sign up to Dreampotential</p>
                <p className='already'>Already a member ? Log in</p>
            </div>

          <form className="form-getInTouch">

            <div className="input-container-LogIn">
              <label className="label">Name* </label>
              <input
                className='input-border'
                style={{ height: "40px" }}
                type="text"
                name="name"
                placeholder='Email address or username'
              />
             
            </div>

            <div className="input-container-LogIn">
              <label className="label">Email* </label>
              <input
                className='input-border'
                style={{ height: "40px" }}
                type="password"
                name="email"
                placeholder='Password'
              />
              
            </div>
            <p className='forgot-pass'>Forgot Password ?</p>

            <div className="button-container">
              <button
                className="connect"
                type="submit"
              >
                {" "}
                Create an account
              </button>

              <button
                className="mt-4 connect-Google"
                type="submit"
              >
                {" "}
               Sign up with Google
              </button>
            </div>
            <div className='pt-5'>
                <p className='login-footer'> By signing in you agree to our Terms of Service </p>
                <p className='login-footer'> and Privacy Policy. Don't have an account? Sign Up</p>
            </div>
          </form>
        </div>
       
      </div>
    </div>
  </>
  )
}

export default LogIn