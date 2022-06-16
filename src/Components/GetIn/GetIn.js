import React from "react";
import "./GetIn.css";
import msg from '../../assets/msg.png'


const GetIn = () => {
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

        <div className="row mb-5 pb-5">
          <div className="left col-md-6">
            <div className="div-center">
                <div className="position-relative">
                    <div className="circle">
                        <img className="circle-msg" src={msg} alt=""/>
                    </div> 
                    <h1>Get In Touch</h1>
                </div>
            </div>
          </div>
          <div className="right col-md-6">
            <form className="form-getInTouch mt-5">
              <div className="input-container-getIn">
                <div class="form-row">
                  <div class="form-group col-md-6">
                    <label className="label">First Name*</label>
                    <input type="text" class="form-control"  style={{ height: "40px" }} />
                  </div>
                  <div class="form-group col-md-6">
                    <label className="label">Last Name*</label>
                    <input type="email" class="form-control"  style={{ height: "40px" }}/>
                  </div>
                </div>
              </div>
              <div className="input-container-getIn">
                <label className="label">Email* </label>
                <input
                  style={{ height: "40px" }}
                  type="text"
                  name="email"
                  required
                />
              </div>
              <div className="input-container-getIn">
                <label className="label">Phone Number*</label>
                <input
                  style={{ height: "40px" }}
                  type="number"
                  name="phone"
                  required
                />
              </div>
              <div className="input-container-getIn">
                <label className="label">Website*</label>
                <input
                  style={{ height: "40px" }}
                  type="text"
                  name="website"
                  required
                />
              </div>
              <div className="button-container pb-5">
                <button className="mt-5 connect" type="submit">
                  {" "}
                  Connect
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default GetIn;
