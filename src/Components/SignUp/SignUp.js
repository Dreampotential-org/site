import React, { useRef, useState, useEffect } from "react";
import "./SignUp.css";
import NewNav from "../Nav/Nav";
import logo from "../../assets/logo_login.png";
import msg from "../../assets/msg-icon.png";
import lock from "../../assets/Secure_Security_Lock-2.png";
import google from "../../assets/google.png";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { AiOutlineWarning, AiOutlineMail, AiOutlineLock } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { signUPApi } from "../../services/helper";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";

const SignUp = (props) => {
  const [valuesregi, setValuesregi] = useState({
    name: "",
    email: "",
    password: "",
  });
  const navigate = useNavigate();

  const [errorCreate, setErrorCreate] = useState({});

  const onChangeregi = (event) => {
    event.persist();
    setErrorCreate(validateregi(valuesregi));
    setValuesregi((valuesregi) => ({
      ...valuesregi,
      [event.target.name]: event.target.value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrorCreate(validateregi(valuesregi));
    let errorCreate = {};
    let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
    if (!valuesregi.name) {
      errorCreate.name = "Name is required";
    } else if (!/^[a-zA-Z]/.test(valuesregi.name)) {
      errorCreate.name = "Name is invalid";
    }
    if (!valuesregi.email) {
      errorCreate.email = "Email address is required";
    } else if (
      !/\S+@\S+\.\S+/.test(valuesregi.email) ||
      !/^[a-zA-Z]/.test(valuesregi.name)
    ) {
      errorCreate.email = "Email address or username is invalid";
    }
    if (!valuesregi.password) {
      errorCreate.password = "Password is required";
    } else {
      const payload = {
        name: valuesregi.name,
        email: valuesregi.email,
        password: valuesregi.password,
      };

      signUPApi(payload)
        .then((res) => {
          console.log("response==>" + JSON.stringify(res));
          if (res?.status === 200) {
            toast.success("SignUp Successfully !");
            localStorage.setItem("token", res.data.token);
            setValuesregi({
              name: "",
              email: "",
              password: "",
            });
            navigate("/project-services"); // Redirect to /projectlists upon successful signup
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
              <p className="label-login">Sign up to Dreampotential</p>
              <p className="already">
                Already a member ?{" "}
                <span>
                  <a href="/login">Log in</a>
                </span>
              </p>
            </div>
            <div className="signup-form-section">
              <form className="touch_form mt-2">
                <div className="input-container">
                  <div class="right-inner-addon input-container">
                    <i class="fa fa-search">
                      <BsFillPersonFill
                        size={25}
                        style={{ color: "gray" }}
                      />
                    </i>
                    <input
                      className="signup-input-box"
                      onChange={onChangeregi}
                      value={valuesregi.name}
                      placeholder="Username"
                      type="text"
                      name="name"
                      required
                    />

                    {errorCreate.name && (
                      <div className="err-section">
                        <AiOutlineWarning size={25} style={{ color: "red" }} />
                        <p className="signup-err-msg">{errorCreate.name}</p>
                      </div>
                    )}
                  </div>
                </div>

                <div className="input-container">
                  <div className="right-inner-addon input-container">
                    <i className="fa fa-search">
                      <AiOutlineMail size={25} style={{ color: "gray" }} />
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

                    {errorCreate.email && (
                      <div className="err-section">
                        <AiOutlineWarning size={25} style={{ color: "red" }} />
                        <p className="signup-err-msg">{errorCreate.email}</p>
                      </div>
                    )}
                  </div>
                </div>
                <div className="input-container">
                  <div className="right-inner-addon input-container">
                    <i className="fa fa-search">
                      <AiOutlineLock
                        size={30}
                        style={{ color: "gray", paddingBottom: "3px" }}
                      />
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

                    {errorCreate.password && (
                      <div className="err-section">
                        <AiOutlineWarning size={25} style={{ color: "red" }} />
                        <p className="signup-err-msg">{errorCreate.password}</p>
                      </div>
                    )}
                  </div>
                </div>
                <p className="forgot-pass">Forgot Password ?</p>

                <button
                  className="connect-create-btn mt-5"
                  type="submit"
                  onClick={handleSubmit}
                >
                  Create an account
                </button>

                <div className="pt-5">
                  <p className="login-footer">
                    By signing in you agree to our{" "}
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

function validateregi(valuesregi) {
  let errorCreate = {};
  let passw = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/;
  if (!valuesregi.name) {
    errorCreate.name = "Name is required";
  } else if (!/^[a-zA-Z]/.test(valuesregi.name)) {
    errorCreate.name = "Name is invalid";
  }
  if (!valuesregi.email) {
    errorCreate.email = "Email address is required";
  } else if (
    !/\S+@\S+\.\S+/.test(valuesregi.email) ||
    !/^[a-zA-Z]/.test(valuesregi.name)
  ) {
    errorCreate.email = "Email address is invalid";
  }
  if (!valuesregi.password) {
    errorCreate.password = "Password is required";
  } 
  return errorCreate;
}

export default SignUp;
