import React from 'react'
import NewNav from '../Nav/Nav'
import "./LogIn.css"
import logo from "../../assets/logo_login.png";
import msg from "../../assets/msg-icon.png";
import lock from "../../assets/Secure_Security_Lock-2.png";
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
                <p className='already'>Already a member ? <span><a href=''>Log in</a></span></p>
            </div>

          <form className="form-getInTouch">

            <div className="input-container-LogIn mt-4">
              {/* <label className="label">Name* </label> */}
              {/* <input
                className='input-border'
                style={{ height: "40px" }}
                type="text"
                name="name"
                placeholder='Email address or username'
              /> */}


            {/* <div>
                <span><img src={msg} alt="logo"/></span>
                <input />
                <span><img src={lock} alt="logo"/></span>
            </div> */}

        <div class="right-inner-addon input-container">
            <i class="fa fa-search">
              <img src={msg} alt="logo"/>
            </i>
            <input type="text"
                   class="form-control placeholder-text" 
                   placeholder="Email address or username" />
        </div>
            
             
            </div>

            <div className="input-container-LogIn mt-4">
              {/* <label className="label">Email* </label> */}
              {/* <input
                className='input-border'
                style={{ height: "40px" }}
                type="password"
                name="email"
                placeholder='Password'
              /> */}
              
              <div class="right-inner-addon input-container">
                  <i class="fa fa-search">
                    <img src={lock} alt="logo"/>
                  </i>
                  <input type="password"
                        class="form-control placeholder-text" 
                        placeholder="Password" />
              </div>

            </div>
            <p className='forgot-pass'>Forgot Password ?</p>

            <div className="button-container">
              <button
                className="connect mt-5"
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
                <p className='login-footer'> By signing in you agree to our <span><a href=''>Terms of Service</a></span> </p>
                <p className='login-footer'> and <span><a href=''>Privacy Policy.</a></span> Don't have an account? <span><a href=''>Sign Up</a></span></p>
            </div>
          </form>
        </div>
       
      </div>
    </div>
  </>
  )
}

export default LogIn