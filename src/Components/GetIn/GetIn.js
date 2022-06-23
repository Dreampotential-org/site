import React, { useRef, useState, useEffect } from "react";
import "./GetIn.css";
import msg from "../../assets/msg.png";
import { leadCreateApi } from "../../services/helper";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const GetIn = () => {
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
      console.log("valuesregi dsdads" + JSON.stringify(errorCreate.name));
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
    } else {
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
          toast.error("email is required !" + err);
        });
    }
  };

  return (
    <>
      <div class="container">
        <div className="mt-5 mb-5">
          <h1 className="title-select mt-5">Lorem Ipsum</h1>
          <p className="text-content mt-5">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry.
          </p>
          <p className="text-content">
            Lorem Ipsum and more recently with desktop .
          </p>
        </div>

        <div className="row  pb-5">
          <div className="left col-md-6">
            <div className="div-center">
              <div className="position-relative">
                <div className="circle-logo">
                  <img className="circle-msg" src={msg} alt="" />
                </div>
                <h1>Get In Touch</h1>
              </div>
            </div>
          </div>
          <div className="right col-md-6">
            <form className="form-getInTouch mt-5">
              <div className="input-container-getIn">
                <label className="label">Name* </label>
                <input
                  style={{ height: "40px" }}
                  type="text"
                  name="name"
                  onChange={onChangeregi}
                  value={valuesregi.name}
                />
                {errorCreate.name && (
                  <p className="err-msg">{errorCreate.name}</p>
                )}
              </div>

              <div className="input-container-getIn">
                <label className="label">Email* </label>
                <input
                  style={{ height: "40px" }}
                  type="text"
                  name="email"
                  onChange={onChangeregi}
                  value={valuesregi.email}
                  required
                />
                {errorCreate.email && (
                  <p className="err-msg">{errorCreate.email}</p>
                )}
              </div>
              <div className="input-container-getIn">
                <label className="label">Phone Number*</label>
                <input
                  style={{ height: "40px" }}
                  type="number"
                  name="phone"
                  onChange={onChangeregi}
                  value={valuesregi.phone}
                  required
                />
                {errorCreate.phone && (
                  <p className="err-msg">{errorCreate.phone}</p>
                )}
              </div>
              <div className="input-container-getIn">
                <label className="label">Website*</label>
                <input
                  style={{ height: "40px" }}
                  type="text"
                  name="website"
                  onChange={onChangeregi}
                  value={valuesregi.website}
                  required
                />
              </div>
              <div className="button-container pb-5">
                <button
                  className="mt-5 connect"
                  type="submit"
                  onClick={handleSubmit}
                >
                  {" "}
                  Connect
                </button>
                <ToastContainer />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

function validateregi(valuesregi) {
  console.log("valuesregi :- " + JSON.stringify(valuesregi));
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

export default GetIn;
