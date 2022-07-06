import React ,{useRef, useState ,useEffect} from "react";
import { Container, Button } from "react-bootstrap";
import Circles from "../../assets/Circles-01.svg";
import Form from "react-bootstrap/Form";
import "./GetInTouch.css";
import { leadCreateApi } from "../../services/helper";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const GetInTouch = (props) => {

  const [valuesregi, setValuesregi] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

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
    //console.log('valuesregi'+JSON.stringify(valuesregi))
    // toast.success("Created successfully !");
  
      let errorCreate = {};
      if (!valuesregi.name) {
                errorCreate.name = "Name is required";
                console.log('valuesregi dsdads'+JSON.stringify(errorCreate.name))
      } else if (!/^[a-zA-Z]/.test(valuesregi.name)) {
        errorCreate.name = "Name is invalid";
      }
      if (!valuesregi.email) {
        errorCreate.email = "Email address is required";
      } else if (!/\S+@\S+\.\S+/.test(valuesregi.email)) {
        errorCreate.email = "Email address is invalid";
      }
      if (!valuesregi.phone) {
        errorCreate.phone = "phone number is required";
      } else if (!/\S+@\S+\.\S+/.test(valuesregi.email)) {
        errorCreate.phone = "phone number is invalid";
      }
     
      else{
      const payload = {
        name: valuesregi.name,
        email: valuesregi.email,
        phone: valuesregi.phone,
        website: valuesregi.website,
      };
  
      leadCreateApi(payload)
          .then((res) => {
            // console.log("response==>"+JSON.stringify(res))
            if (res?.status == 201) {
              toast.success("information submitted successfully !");
              setValuesregi({
                name: "",
                email: "",
                phone: "",
                website: "",
              });
            } else {
              toast.error("all fields is required");
            }
          })
          .catch((err) => {
            toast.error("email is required !"+err);
          });
      }  
    }

  return (
    <Container className="mt-5" ref={props.ref}>
      <div className="line-center">
        <div className="line"></div>
        <img className="img-circle" src={Circles} alt="icon" />
        <div className="line"></div>
      </div>
      <div className="form-section">
        {/* <h1 className="mt-5">Get in Touch</h1> */}


        <form className="touch_form mt-2">
                        <div className="input-container">
                          <label className="label">FULL NAME </label>
                          <input
                          className="input-box"
                          onChange={onChangeregi}
                          value={valuesregi.name}
                          type="text" name="name" required />
                        
                        {errorCreate.name && (
                        <p className="err-msg">
                          {errorCreate.name}
                        </p>
                        )}

                        </div>
                        <div className="input-container">
                          <label className="label">EMAIL </label>
                          <input
                          className="input-box" 
                            onChange={onChangeregi}
                            value={valuesregi.email}
                           type="text" name="email" required />

                        {errorCreate.email && (
                        <p className="err-msg">
                          {errorCreate.email}
                        </p>
                        )}
                        
                        </div>
                        <div className="input-container">
                          <label className="label">PHONE NUMBER </label>
                          <input 
                          className="input-box"
                          onChange={onChangeregi}
                          value={valuesregi.phone}
                          type="number" name="phone" required />

                        {errorCreate.phone && (
                        <p className="err-msg">
                          {errorCreate.phone}
                        </p>
                        )}
                        
                        </div>
                        <div className="input-container">
                          <label className="label">WEBSITE</label>
                          <input 
                          className="input-box"
                          onChange={onChangeregi}
                          value={valuesregi.website}
                          type="text" name="website" required />

                        {errorCreate.website && (
                        <p className="">
                          {errorCreate.website}
                        </p>
                        )}
                        
                        </div>
                        <div className="button-container pb-5">
                          {/* <button className="submit"type="submit" onClick={handleSubmit}> SUBMIT</button> */}
                          <Button onClick={handleSubmit} className="btn-connect label mt-3" variant="outline-*">
                            Connect
                          </Button>
                          <ToastContainer />
                        </div>
        </form>

      </div>
    </Container>
  );
};

function validateregi(valuesregi) {
  console.log("valuesregi :- "+JSON.stringify(valuesregi))
  let errorCreate = {};
  if (!valuesregi.name) {
    errorCreate.name = "Name is required";
  } else if (!/^[a-zA-Z]/.test(valuesregi.name)) {
    errorCreate.name = "Name is invalid";
  }
  if (!valuesregi.email) {
    errorCreate.email = "Email address is required";
  } else if (!/\S+@\S+\.\S+/.test(valuesregi.email)) {
    errorCreate.email = "Email address is invalid";
    }
    return errorCreate;
  }

export default GetInTouch;
