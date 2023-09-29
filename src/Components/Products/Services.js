import React from "react";
import "./Services.css";
import stream_meeting from "../../assets/stream_meeting.png";
import Setting from "../../assets/Setting.png";
import Circle from "../../assets/Circle.png";
import Conference_base from "../../assets/Conference_base_New.png";
import teacher_ui_logo from "../../assets/teacher-ui-new.png";
import chrome_extension from "../../assets/chrome-extension.png";
import Socket_Link from "../../assets/Socket_Link_New.png";
import right_arrow from "../../assets/right_arrow.png";
import TitleandText from "../TitleandText/TitleandText";
import checkmark from "../../assets/checkmark.png";

import { BsCheckCircleFill } from "react-icons/bs";

const Services = () => {
  return (
    <>
      <div className="product-back">
        <div className="container pt-5">

          <TitleandText
            // title="Services"
            content="Some project we are building"
            className="abc"
          />

          <div className="row">
            <div className="col-md-6 product-right">
              <div>
                <h3 className="services-title">Socket-Link API</h3>
                <div className="my-5">
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">Stream Meetings</p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Allows multiple conference room
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Save to Socket Link library for easy access
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div>
                      <p className="conference-text">
                        Get a configurable slots and slot time
                      </p>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn-learn-more btn-primary ">
                  LEARN MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
              </div>
            </div>
            <div className="col-md-6 product-left mt-5">
              <div>
                <img style={{ width: "100%" }} src={Socket_Link} alt="" />
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-6 product-right">
              <div>
                <h3 className="services-title">Conference-Base</h3>
                <div className="my-5">
                <div className="img-icon mt-2">
                  <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                  <div className="img-icon-text">
                    <p className="conference-text">
                      Plan ahead, set up meetings and empower your business.
                    </p>
                  </div>
                </div>
                <div className="img-icon mt-2">
                  <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                  <div className="img-icon-text">
                    <p className="conference-text">Socket-link enabled</p>
                  </div>
                </div>
                </div>
                <button type="button" className="btn-learn-more btn-primary ">
                  LEARN MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
              </div>
            </div>
            <div className="col-md-6 product-left">
              <div>
                <img style={{ width: "100%" }} src={Conference_base} alt="" />
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-6 product-right">
              <div>
                <h3 className="services-title">Teacher-UI</h3>
                <div className="my-5">
                <div className="img-icon mt-2">
                  <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                  <div className="img-icon-text">
                    <p className="conference-text">Generate more leads</p>
                  </div>
                </div>
                <div className="img-icon mt-2">
                  <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                  <div className="img-icon-text">
                    <p className="conference-text">
                      Save and track them with ease realtime
                    </p>
                  </div>
                </div>

                <div className="img-icon mt-2">
                  <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                  <div className="img-icon-text">
                    <p className="conference-text">
                      Get more sales in a secure way
                    </p>
                  </div>
                </div>
                </div>
                <button type="button" className="btn-learn-more btn-primary ">
                  LEARN MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
              </div>
            </div>
            <div className="col-md-6 product-left">
              <div>
                <img style={{ width: "100%" }} src={teacher_ui_logo} alt="" />
              </div>
            </div>
          </div>

          <div className="row py-5">
            <div className="col-md-6 product-right">
              <div>
                <h3 className="services-title">Chrome Extension-Base</h3>
                <div className="my-5">
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Document what you have in mind
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">Upload your ideas</p>
                    </div>
                  </div>
                </div>
                <button type="button" className="btn-learn-more btn-primary ">
                  LEARN MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
              </div>
            </div>
            <div className="col-md-6 product-left mt-5">
              <div>
                <img style={{ width: "100%" }} src={Socket_Link} alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Services;
