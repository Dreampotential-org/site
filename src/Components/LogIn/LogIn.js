
import React, { useState } from "react";
import "./LogIn.css";
import NewNav from "../Nav/Nav";
import logo from "../../assets/logo_login.png";
import { AiOutlineWarning, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { BsFillPersonFill } from "react-icons/bs";
import { logInApi } from "../../services/helper";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";

const LogIn = (props) => {
  const [valuesregi, setValuesregi] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errorCreate, setErrorCreate] = useState({
    email: "",
    password: "",
  });

  const onChangeregi = (event) => {
    event.persist();
    setValuesregi((valuesregi) => ({
      ...valuesregi,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const updatedErrors = {
      email: !valuesregi.email ? "Email address is required" : "",
      password: !valuesregi.password ? "Password is required" : "",
    };
    setErrorCreate(updatedErrors);

    if (!updatedErrors.email && !updatedErrors.password) {
      // Proceed with login logic here
      const payload = {
        email: valuesregi.email,
        password: valuesregi.password,
      };

      logInApi(payload)
        .then((res) => {
          console.log("response ==>" + JSON.stringify(res));
          if (res?.status === 200) {
            toast.success("LogIn Successfully!");
            setValuesregi({
              email: "",
              password: "",
            });
            navigate("/");
          }
        })
        .catch((err) => {
          toast.error(err.msg);
        });
    }
  };

  return (
    <>
      <div className="signUp-bg">
        <NewNav />
        <div className="main-section">
          <div className="signup-right">
            <div className="signup-logo">
              <img src={logo} alt="logo" />
              <p className="label-login">Login to Dreampotential</p>
            </div>
            <div className="signup-form-section">
              <form className="touch_form mt-2">
                <div className="input-container">
                  <div className="right-inner-addon input-container">
                    {errorCreate.email && (
                      <div className="err-section">
                        <AiOutlineWarning size={25} style={{ color: "red" }} />
                        <p className="signup-err-msg">{errorCreate.email}</p>
                      </div>
                    )}
                    <i className="fa fa-search">
                      <AiOutlineMail size={25} style={{ color: "black" }} />
                    </i>
                    <input
                      className="signup-input-box"
                      onChange={onChangeregi}
                      value={valuesregi.email}
                      placeholder="Email address"
                      type="text"
                      name="email"
                      required
                    />
                  </div>
                </div>
                <div className="input-container">
                  <div className="right-inner-addon input-container">
                    {errorCreate.password && (
                      <div className="err-section">
                        <AiOutlineWarning size={25} style={{ color: "red" }} />
                        <p className="signup-err-msg">{errorCreate.password}</p>
                      </div>
                    )}
                    <i className="fa fa-search">
                      <AiOutlineLock size={30} style={{ color: "black", paddingBottom: "3px" }} />
                    </i>
                    <input
                      className="signup-input-box"
                      onChange={onChangeregi}
                      value={valuesregi.password}
                      type="password"
                      name="password"
                      placeholder="Password"
                      required
                    />
                  </div>
                </div>
                <p className="forgot-pass">Forgot Password ?</p>
                <button
                  className="connect-create-btn mt-5"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Login an account
                </button>
                <div className="pt-5 text-center">
                  <p className="login-footer">
                    By signing in, you agree to our{" "}
                    <span>
                      <a href="">Terms of Service</a>
                    </span>{" "}
                  </p>
                  <p className="login-footer">
                    and{" "}
                    <span>
                      <a href="">Privacy Policy.</a>
                    </span>{" "}
                    Don't have an account?{" "}
                    <span>
                      <a href="/signup">Sign Up</a>
                    </span>
                  </p>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
};

export default LogIn;




// import React, { useRef, useState, useEffect } from "react";
// import "./LogIn.css";
// import NewNav from "../Nav/Nav";
// import logo from "../../assets/logo_login.png";
// import { AiOutlineWarning, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { BsFillPersonFill } from "react-icons/bs";
// import { logInApi } from "../../services/helper";
// import { ToastContainer, toast } from "react-toastify";

// import "react-toastify/dist/ReactToastify.css";

// const LogIn = (props) => {
//   const [valuesregi, setValuesregi] = useState({
//     name: "",
//     email: "",
//     password: "",
//   });

//   const navigate = useNavigate();

//   const [errorCreate, setErrorCreate] = useState({});

//   const onChangeregi = (event) => {
//     event.persist();
//     setErrorCreate(validateregi(valuesregi));
//     setValuesregi((valuesregi) => ({
//       ...valuesregi,
//       [event.target.name]: event.target.value,
//     }));
//   };
//   const handleSubmit = (event) => {
//     event.preventDefault();
//     setErrorCreate(validateregi(valuesregi));
//     let errorCreate = {};
//     let passw = /^(?=.\d)(?=.[a-z])(?=.*[A-Z]).{6,20}$/;

//     if (!valuesregi.email) {
//       errorCreate.email = "Email address is required";
//     } else if (
//       !/\S+@\S+\.\S+/.test(valuesregi.email) ||
//       !/^[a-zA-Z]/.test(valuesregi.name)
//     ) {
//       errorCreate.email = "Email address or username is invalid";
//     }
//     if (!valuesregi.password) {
//       errorCreate.password = "Password is required";
//     } else {
//       const payload = {
//         email: valuesregi.email,
//         password: valuesregi.password,
//       };

//       logInApi(payload)
//         .then((res) => {
//           console.log("response==>" + JSON.stringify(res));
//           if (res?.status == 200) {
//             toast.success("LogIn Successfully !");
//             setValuesregi({
//               name: "",
//               email: "",
//               password: "",
//             });
//             navigate('/'); // Redirect to the desired route
//           }
//         })
//         .catch((err) => {
//           toast.error(err.msg);
//         });
//     }
//   };

//   return (
//     <>
//       <div className="signUp-bg">
//         <NewNav />
//         <div className="main-section">
//           <div className="signup-right">
//             <div className="signup-logo">
//               <img src={logo} alt="logo" />
//               <p className="label-login">Login to Dreampotential</p>
//             </div>
//             <div className="signup-form-section">
//               <form className="touch_form mt-2">
//                 {errorCreate.email && (
//                   <div className="err-section">
//                     <AiOutlineWarning size={25} style={{ color: "red" }} />
//                     <p className="signup-err-msg">{errorCreate.email}</p>
//                   </div>
//                 )}
//                 <div className="input-container">
//                   <div className="right-inner-addon input-container">
//                     <i className="fa fa-search">
//                       <AiOutlineMail size={25} style={{ color: "black" }} />
//                     </i>
//                     <input
//                       className="signup-input-box"
//                       onChange={onChangeregi}
//                       value={valuesregi.email}
//                       placeholder="Email address"
//                       type="text"
//                       name="email"
//                       required
//                     />

//                   </div>
//                 </div>
//                 <div className="input-container">
//                   <div className="right-inner-addon input-container">
                   
//                     {errorCreate.password && (
//                       <div className="err-section">
//                         <AiOutlineWarning size={25} style={{ color: "red" }} />
//                         <p className="signup-err-msg">{errorCreate.password}</p>
//                       </div>
//                     )}
//                      <i className="fa fa-search">
//                       <AiOutlineLock size={30} style={{ color: "black", paddingBottom: '3px' }} />
//                     </i>
//                     <input
//                       className="signup-input-box"
//                       onChange={onChangeregi}
//                       value={valuesregi.password}
//                       type="password"
//                       name="password"
//                       placeholder="Password"
//                       required
//                     />

               
//                   </div>
//                 </div>
//                 <p className="forgot-pass">Forgot Password ?</p>

//                 <button
//                   className="connect-create-btn mt-5"
//                   type="submit"
//                   onClick={handleSubmit}
//                 >
//                   {" "}
//                   Login an account
//                 </button>

//                 {/* <button className="mt-4 connect-Google" type="submit">
//                   {" "}
//                   <div className="google-icon">
//                     <img src={google} alt="" />
//                     Sign up with Google
//                   </div>
//                 </button> */}
//                 <div className="pt-5 text-center">
//                   <p className="login-footer">
//                     {" "}
//                     By signing in you agree to our{" "}
//                     <span>
//                       <a href="">Terms of Service</a>
//                     </span>{" "}
//                   </p>
//                   <p className="login-footer">
//                     {" "}
//                     and{" "}
//                     <span>
//                       <a href="">Privacy Policy.</a>
//                     </span>{" "}
//                     Don't have an account?{" "}
//                     <span>
//                       <a href="/signup">Sign Up</a>
//                     </span>
//                   </p>
//                 </div>
//               </form>
//             </div>
//           </div>
//         </div>
//       </div>
//       <ToastContainer />
//     </>
//   );
// };

// function validateregi(valuesregi) {
//   //   console.log("valuesregi :- " + JSON.stringify(valuesregi));
//   let errorCreate = {};
//   if (!valuesregi.email) {
//     errorCreate.email = "Email address is required";
//   } else if (
//     !/\S+@\S+\.\S+/.test(valuesregi.email)
//   ) {
//     errorCreate.email = "Email address is invalid";
//   }
//   if (!valuesregi.password) {
//     errorCreate.password = "Password is required";
//   }
//   //   else if (valuesregi.password.match(passw)) {
//   //     errorCreate.password = "Password is invalid";
//   //   }

//   return errorCreate;
// }

// export default LogIn;