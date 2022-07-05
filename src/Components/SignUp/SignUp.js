import React from 'react'
import NewNav from '../Nav/Nav'
import "./SignUp.css"
import logo from "../../assets/logo_login.png";
import msg from "../../assets/msg-icon.png";
import lock from "../../assets/Secure_Security_Lock-2.png";
import google from "../../assets/google.png";

const SignUp = () => {
  return (
    <>
        <NewNav/>
     
        <div className='signUp-bg'>
            <div className='container'>
                <div class="row">
                    <div class="col-md-4 offset-md-4">
                        <div className='sign-up-back mt-5 pt-5 pb-5'>
                            <div className="signup-right mt-5 pt-5 ">

                            <div className='login-top'>
                                <img src={logo} alt="logo"/>
                                <p className='label-login'>Sign up to Dreampotential</p>
                                <p className='already'>Already a member ? <span><a href=''>Log in</a></span></p>
                            </div>

                            <form className="form-getInTouch">

                            <div className="input-container-LogIn mt-4">


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
                                <div className='google-icon'>
                                <img src={google} alt=""/>
                                Sign up with Google
                                </div>
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
                </div>
            </div>
        </div>
    </>
  )
}

export default SignUp