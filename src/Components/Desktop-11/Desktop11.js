import React from 'react'
import "./Desktop11.css"
import clock from "../../assets/clock.png";
import stream_meeting from "../../assets/stream_meeting.png";
import Setting from "../../assets/Setting.png";
import Circle from "../../assets/Circle.png";
import NewNav from '../Nav/Nav';

const AboutUs = () => {
  return (
    <>
    <NewNav/>
        <div className='container mt-5 pt-5'>
          <div className='row mt-5'>
            <div className='col-md-4'>
                  <div className='desktop-text-11'>Socket-Link API</div>
                  <div className='desktop-text-11 mt-3'>Conference-Base</div>
                  <div className='desktop-text-11 mt-3'>Teacher-UI</div>
                  <div className='desktop-text-11 mt-3'>Chrome extension-base</div>
            </div>

            <div className='col-md-8'>
                  <p className='desktop11-text'>Real time messaging multiple conference room platform.</p>
                  
              <div className='desktop11-right'>
                <div className='col-md-1'>
                  <img src={stream_meeting} alt=""/>
                </div>
                <div className='col-md-11'>
                  <p className='desktop11-text'>Stream Meeting</p>
                  </div>
              </div>

              <div className='desktop11-right pt-1'>
                <div className='col-md-1'>
                  <img src={Setting} alt=""/>
                </div>
                <div className='col-md-11'>
                  <p className='desktop11-text'>Configurable Slots and Slot time</p>
                </div>
              </div>

              <div className='desktop11-right pt-2'>
                <div className='col-md-1'>
                  <img src={Circle} alt=""/>
                </div>
                <div className='col-md-11'>
                  <p className='desktop11-text'>save save to Socket-Link Library to easily navigate</p>
                </div>
              </div> 

            </div>
          </div>




        </div>
    </>
  )
}

export default AboutUs