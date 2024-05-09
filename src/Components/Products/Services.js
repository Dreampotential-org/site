import React from "react";
import "./Services.css";
import stream_meeting from "../../assets/stream_meeting.png";
import Setting from "../../assets/Setting.png";
import Circle from "../../assets/Circle.png";
import Conference_base from "../../assets/Conference_base_New.png";
import teacher_ui_logo from "../../assets/teacher-ui-new.png";
import chrome_extension from "../../assets/chrome-extension.png";
// import Socket_Link from "../../assets/Socket_Link_New.png";
import Socket_Link_New from "../../assets/Socket_Link_New.png";
import Socket_Link from "../../assets/Socket_Link.png";
import right_arrow from "../../assets/right_arrow.png";
import TitleandText from "../TitleandText/TitleandText";
import checkmark from "../../assets/checkmark.png";

import { BsCheckCircleFill } from "react-icons/bs";

const Services = () => {

  const onClickHandler = () => {
    window.open(
      // "https://join.slack.com/t/realtorstat/shared_invite/zt-23rpwwaid-KUCF74Zep7Nu5ZFvo5JGdA"
      // "https://app.slack.com/client/T05PGT5P5FV/D05SZUGV1HB"
      " https://github.com/orgs/Dreampotential-org/repositories"
    );
  };

  const onClickHandlerStat = () => {
    window.open(
      // "https://join.slack.com/t/realtorstat/shared_invite/zt-23rpwwaid-KUCF74Zep7Nu5ZFvo5JGdA"
      // "https://app.slack.com/client/T05PGT5P5FV/D05SZUGV1HB"
      " https://agentstat.com/"
    );
  };


  return (
    <>
      <div className="product-back">
        <div className="container pt-5">

          <TitleandText
            // title="Services"
            content="Our Programs"
            className="abc"
          />

       <div className="row ">
            <div className="col-md-6 product-right">
              <div className="new">
                <h3 className="services-title">MSARHP</h3>
                <div className="my-5">
                  <div className="img-icon mt-2">
                  <div style={{ paddingBottom: '0px' }}>
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A", marginBottom: "20px" }} />
                   </div>
                    <div className="img-icon-text">
                      <p className="conference-text">Proven to strength your fitness, fun to use</p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
	  		We are interested in scoring and meaure cardiovascular system.
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <div style={{ paddingBottom: '0px' }}>
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A", marginBottom:"50px" }} />
                   </div>
                    <div className="img-icon-text">
                      <p className="conference-text">
	  		Set your pace, keep kitten your target:w
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div>
                      <p className="conference-text">
                       Check your ARHPMS score. score. 
                      </p>
                    </div>
                  </div>
                </div>
                <button type="button" onClick={onClickHandler} className="btn-learn-more btn-primary ">
                  LEARN MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
              </div>
            </div>
            
            <div className="col-md-6 product-left mt-5">
              {/* <div>
                <img style={{ width: "100%" }} src={Socket_Link} alt="" />
              
              </div> */}
              <div className="video-box">
                <video id="video-player" src="/video/GETSTAT-7-11.10.2020.mp4" controls muted autoPlay loop
            playsInline></video>
              </div>
            </div>
          </div>
        

          





          <div className="row ">
            <div className="col-md-6 product-right">
              <div className="new">
                <h3 className="services-title">AgentStat</h3>
                <div className="my-5">
                  <div className="img-icon mt-2">
                  <div style={{ paddingBottom: '0px' }}>
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A", marginBottom: "20px" }} />
                   </div>
                    <div className="img-icon-text">
                      <p className="conference-text">The Solution to finding you the best real estate agent!</p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                       Hire correctly every time
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <div style={{ paddingBottom: '0px' }}>
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A", marginBottom:"50px" }} />
                   </div>
                    <div className="img-icon-text">
                      <p className="conference-text">
                        A search engine, uses real data to identify the best agent for your particular home based on agents previous listings.
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div>
                      <p className="conference-text">
                        AgentStat home evaluation system
                      </p>
                    </div>
                  </div>
                </div>
                <button type="button" onClick={onClickHandlerStat} className="btn-learn-more btn-primary ">
                  LEARN MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
              </div>
            </div>
            
            <div className="col-md-6 product-left mt-5">
              {/* <div>
                <img style={{ width: "100%" }} src={Socket_Link} alt="" />
              
              </div> */}
              <div className="video-box">
                <video id="video-player" src="/video/GETSTAT-7-11.10.2020.mp4" controls muted autoPlay loop
            playsInline></video>
              </div>
            </div>
          </div>
        

          

          <div className="row chat-ai ">
            <div className="col-md-6 product-right">
              <div className="new">
                <h3 className="services-title">chatAI</h3>
                <div className="my-5">
                  <div className="img-icon mt-2">
                  <div style={{ paddingBottom: '0px' }}>
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                   </div>
                    <div className="img-icon-text">
                      <p className="conference-text">Make AI Available to your Organization </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={45} style={{ color: "#5DC80A"}} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                       Gain Insights about what questions people are asking in your Organization
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <div style={{ paddingBottom: '0px' }}>
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A", marginBottom:"20px" }} />
                   </div>
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Customizable to your needs and expandable to integrate custom integrations
                      </p>
                    </div>
                  </div>

                  {/* <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div>
                      <p className="conference-text">
                        AgentStat home evaluation system
                      </p>
                    </div>
                  </div> */}
                </div>
                <button type="button" onClick={onClickHandler} className="btn-learn-more btn-primary ">
                  LEARN MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
              </div>
            </div>
            
            <div className="col-md-6 product-left mt-5">
              {/* <div>
                <img style={{ width: "100%" }} src={Socket_Link} alt="" />
              
              </div> */}
               <div>
                <img className="chat-ai-img" src="chat_ai.png" alt="" />
              
              </div>
            </div>
          </div>


         <div className="row chat-ai">
            <div className="col-md-6 product-right ">
              <div className="new ">
                <h3 className="services-title">Post Video</h3>
                <div className="my-5">
                  <div className="img-icon mt-2">
                  <div style={{ paddingBottom: '20px' }}>
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                   </div>
                    <div className="img-icon-text">
                      <p className="conference-text">Record better, faster video messages, without installing anything.</p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                      Get feedback on your video and analytics 
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <div style={{ paddingBottom: '0px' }}>
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                   </div>
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Video is instantly available 
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div>
                      <p className="conference-text">
                        Easily record and share AI-powered video 
                      </p>
                    </div>
                  </div>
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={50} style={{ color: "#5DC80A", paddingBottom:"10px" }} />
                    <div>
                      <p className="conference-text">
                       messages with your teammates and customers to supercharge productivity
                      </p>
                    </div>
                  </div>
                </div>
                <button type="button" onClick={onClickHandler} className="btn-learn-more btn-primary ">
                  LEARN MORE
                  <img style={{ marginLeft: 15 }} src={right_arrow} alt="" />
                </button>
              </div>
            </div>
            
            <div className="col-md-6 product-left mt-5">
              <div>
                <img className="chat-ai-img"  src="post_video.png" alt="" />
              
              </div>
              {/* <div className="video-box">
                <video id="video-player" src="/video/GETSTAT-7-11.10.2020.mp4" controls muted autoPlay loop
            playsInline></video>
              </div> */}
            </div>
          </div>
         <div className="row ">
         
            <div className="col-md-6 product-right">
              <div className="new">
                <h3 className="services-title">Meylor Drive</h3>
                <div className="my-5">
                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">Enables turnkey project & device management</p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        {/* Allows multiple conference room */}
                       Automate the workflow of your projects
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div className="img-icon-text">
                      <p className="conference-text">
                        Ability to search all nodes and files
                      </p>
                    </div>
                  </div>

                  <div className="img-icon mt-2">
                    <BsCheckCircleFill size={30} style={{ color: "#5DC80A" }} />
                    <div>
                      <p className="conference-text">
                         Get useful information and easily navigate
                      </p>
                    </div>
                  </div>
                </div>
                <button type="button" onClick={onClickHandler} className="btn-learn-more btn-primary ">
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




          <div className="row ">
            <div className="col-md-6 product-right">
              <div className="new">
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
                <button type="button" onClick={onClickHandler} className="btn-learn-more btn-primary ">
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

          <div className="row py-5 ">
            <div className="col-md-6 product-right">
              <div className="new">
                <h3 className="services-title">Conference-Base</h3>
                <div className="my-5">
                <div className="img-icon mt-2">
                  <BsCheckCircleFill size={40} style={{ color: "#5DC80A", paddingBottom:"10px" }} />
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
                <button type="button" onClick={onClickHandler} className="btn-learn-more btn-primary ">
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

          <div className="row ">
            <div className="col-md-6 product-right">
              <div className="new">
                <h3 className="services-title">Teacher-UI / Teacher-UI-React</h3>
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
                <button type="button" onClick={onClickHandler} className="btn-learn-more btn-primary ">
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

          <div className="row">
            <div className="col-md-6 product-right">
              <div className="new">
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
                <button type="button" onClick={onClickHandler} className="btn-learn-more btn-primary ">
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
