import React from 'react'
import "./Services.css"
import stream_meeting from "../../assets/stream_meeting.png";
import Setting from "../../assets/Setting.png";
import Circle from "../../assets/Circle.png";
import Conference_base from "../../assets/Conference_base.png";
import teacher_ui_logo from "../../assets/teacher-ui-logo.png";
import chrome_extension from "../../assets/chrome-extension.png";
import Socket_Link from "../../assets/Socket_Link.png"; 
import right_arrow from "../../assets/right_arrow.png"; 
import TitleandText from '../TitleandText/TitleandText';
const Services = () => {
  return (
    <>
        
        <div className='product-back'>
        <div className='container'>
        {/* <h1 className="services-title">Services</h1>
        <h1 className='We my-5'>We create software solutions that make jobs easier</h1> */}
        <TitleandText title="Services" content="We create software solutions that make jobs easier"/>
            <div className='row'>
                <div className='col-md-6 product-left mt-5'>
                    <div className='product-box'>

                    </div>
                </div>
                <div className='col-md-6 mt-5'>
                    <h3 className="services-title">Socket-Link API</h3>
                    <h4 className='social-text'>Real time messaging multiple conference room platform.</h4>

                    <div className='desktop11-right'>
                        <div className=''>
                            <img src={stream_meeting} alt=""/>
                            </div>
                            <div className=''>
                            <p className='social-text'>Stream Meeting</p>
                        </div>
                    </div>

                    <div className='desktop11-right'>
                        <div className=''>
                            <img src={Setting} alt=""/>
                            </div>
                            <div className=''>
                            <p className='social-text'>Configurable Slots and Slot time</p>
                        </div>
                    </div>

                    <div className='desktop11-right'>
                        <div className=''>
                            <img src={Circle} alt=""/>
                            </div>
                            <div className=''>
                            <p className='social-text'>save save to Socket-Link Library to easily navigate</p>
                        </div>
                    </div>

                    <button type="button" className="btn-join btn-primary">
                    GO TO APP
                    </button>

                </div>
            </div>

            <div className='row py-5'>
               
                <div className='col-md-6 product-right'>
                    <div>
                        <h3 className="services-title">Socket-Link API</h3>
                        <div className='my-4'>
                            <p className='conference-text'>Stream Meetings</p>
                            <p className='conference-text py-4'>Allows multiple conference room</p>
                            <p className='conference-text'>Save to Socket Link library for easy access</p>
                            <p className='conference-text py-4'>Get a configurable slots and slot time</p>
                        </div>
                        <button type="button" className="btn-join btn-primary ">
                            LEARN MORE
                            <img style={{ marginLeft:15}} src={right_arrow} alt=""/>
                        </button>
                    </div>
                </div>
                <div className='col-md-6 product-left mt-5'>
                    <div>
                    <img style={{width:'100%'}} src={Socket_Link} alt=""/>
                    </div>
                </div>
            </div>

            <div className='row'>
                <div className='col-md-6 product-left mt-5'>
                    <div className='product-box'>

                    </div>
                </div>
                <div className='col-md-6 mt-5'>
                    <h3 className="services-title">Teacher-UI</h3>
                    <h3 className='teacher-ui-text'>Is a learning management system which can also connect money you can track user real time their possitino on the map and update in realtime what is on the screen</h3>

                    <div className='desktop11-right'>
                        <div className=''>
                            <img src={teacher_ui_logo} alt=""/>
                            </div>
                            <div className=''>
                            <p className='teacher-ui-text'>top sales team generate more sales using teacher-ui</p>
                        </div>
                    </div>

                    <button type="button" className="btn-join btn-primary">
                        GO TO APP
                    </button>

                </div>
            </div>


            <div className='row py-5'>
               
               <div className='col-md-6'>
                   <h3 className="services-title">Chrome-Extension-Base</h3>
                       <div>
                           <img src={chrome_extension} alt=""/>
                       </div>
                       <div className='my-4'>
                           <p className='conference-text'>Record and upload anything with easily</p>
                       </div>

                   <button type="button" className="btn-join btn-primary ">
                   GO TO APP
                   </button>

               </div>
               <div className='col-md-6 product-left mt-5'>
                   <div className='product-box'>

                   </div>
               </div>
           </div> 

        </div>
        </div>
    </>
  )
}

export default Services