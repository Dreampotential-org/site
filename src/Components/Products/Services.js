import React from 'react'
import "./Services.css"
import stream_meeting from "../../assets/stream_meeting.png";
import Setting from "../../assets/Setting.png";
import Circle from "../../assets/Circle.png";
import Conference_base from "../../assets/Conference_base.png";
import teacher_ui_logo from "../../assets/teacher-ui-logo.png";
import chrome_extension from "../../assets/chrome-extension.png";

const Services = () => {
  return (
    <>
        
        <div className='product-back'>
        <div className='container'>
        <h1>Services</h1>
            <div className='row'>
                <div className='col-md-6 product-left mt-5'>
                    <div className='product-box'>

                    </div>
                </div>
                <div className='col-md-6 product-right mt-5'>
                    <h3>Socket-Link API</h3>
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
                    <h3>Conference-Base</h3>
                        <div>
                            <img src={Conference_base} alt=""/>
                        </div>
                        <div className='my-4'>
                            <p className='conference-text'>Powerful secure video conference solution to power your business</p>
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

            <div className='row'>
                <div className='col-md-6 product-left mt-5'>
                    <div className='product-box'>

                    </div>
                </div>
                <div className='col-md-6 product-right mt-5'>
                    <h3>Teacher-UI</h3>
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
               
               <div className='col-md-6 product-right'>
                   <h3>Chrome-Extension-Base</h3>
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