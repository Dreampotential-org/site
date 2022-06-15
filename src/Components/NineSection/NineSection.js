import React ,{useRef, useState ,useEffect} from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import Rectanglefriendsimg from "../../Assets/get_started_new.png";
import { leadCreateApi } from "../../services/helper";
import "./NineSection.css";
import { Alert } from "bootstrap";
import { ToastContainer, toast } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

export const NineSection = ({messages}) => {
  const [valuesregi, setValuesregi] = useState({
    name: "",
    email: "",
    phone: "",
    website: "",
  });

  const messagesEndRef = useRef(messages)

  const [errorCreate, setErrorCreate] = useState({});

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" })
  }

    const onChangeregi = (event) => {
      event.persist();
      setErrorCreate(validateregi(valuesregi));
      setValuesregi((valuesregi) => ({
        ...valuesregi,
        [event.target.name]: event.target.value,
      }));
    };

    useEffect(() => {
      if(messages!==''){
      scrollToBottom()
      }
    }, [messages]);

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
    <div className="container">
    <div className="" ref={messagesEndRef}>
      <div className="container-fluid">
        <Row>
          <Col md={6} className="p-0">
            <div className="position-relative">
              <div>
                {/* <img
                  className="friends-img position-relative"
                  src={Rectanglefriendsimg}
                  alt="Man"
                /> */}
              </div>
            </div>
          </Col>
          <Col md={6} className="p-0 getstarted">
            <h1 className="heading"> Get Started</h1>    
                <form className="form-getstarted">
                  <div className="input-container">
                    <label className="label">FULL NAME </label>
                    <input
                    onChange={onChangeregi}
                    value={valuesregi.name}
                    style={{height:'40px'}}type="text" name="name" required />
                  
                  {errorCreate.name && (
                  <p className="err-msg">
                    {errorCreate.name}
                  </p>
                  )}

                  </div>
                  <div className="input-container">
                    <label className="label">EMAIL </label>
                    <input 
                      onChange={onChangeregi}
                      value={valuesregi.email}
                    style={{height:'40px'}} type="text" name="email" required />

                  {errorCreate.email && (
                  <p className="err-msg">
                    {errorCreate.email}
                  </p>
                  )}
                  
                  </div>
                  <div className="input-container">
                    <label className="label">PHONE NUMBER </label>
                    <input 
                    onChange={onChangeregi}
                    value={valuesregi.phone}
                    style={{height:'40px'}} type="number" name="phone" required />

                  {errorCreate.phone && (
                  <p className="err-msg">
                    {errorCreate.phone}
                  </p>
                  )}
                  
                  </div>
                  <div className="input-container">
                    <label className="label">WEBSITE</label>
                    <input 
                    onChange={onChangeregi}
                    value={valuesregi.website}
                    style={{height:'40px'}}type="text" name="website" required />

                  {errorCreate.website && (
                  <p className="">
                    {errorCreate.website}
                  </p>
                  )}
                  
                  </div>
                  <div className="button-container pb-5">
                    <button className="submit"type="submit" onClick={handleSubmit}> SUBMIT</button>
                    <ToastContainer />
                  </div>
                </form>
          </Col>
        </Row>
      </div>
    </div>
    </div>
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

export default NineSection;
