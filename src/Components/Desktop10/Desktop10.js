import React from 'react'
import laptop_img from "../../assets/laptop-img.png";
import Desktop11 from '../Desktop-11/Desktop11';
import NewNav from '../Nav/Nav';
import "./Desktop10.css"

const Desktop10 = () => {
  return (
    <>
    <NewNav/>
        <div class="container pt-5">
            {/* <Desktop11/> */}
            <div class="row desktop-10 pt-5 mt-5">
                <div class="col-sm-3">
                    <div className='desktop-text'> Socket-Link API</div>
                </div>
                <div class="col-sm-3">
                    <div className='desktop-text'>Chrome extension-base</div>
                </div>
                <div class="col-sm-3">
                    <div className='desktop-text'>Chrome extension-base</div>
                </div>
                <div class="col-sm-3">
                    <div className='desktop-text'>Chrome extension-base</div>
                </div>
            </div>
            <div class="row">        
                <div class="side-1 col-md-8">
                    <div>
                        <h4>Real time messaging multiple conference room platform.</h4>
                        <li>Stream Meeting</li>
                        <li>Configurable Slots and Slot time</li>
                        <li>save save to Socket-Link Library to easily navigate</li>
                    </div>
                </div>
                <div class="side-2 col-md-4">
                    <img
                    className="common_img-desktop img-fluid"
                    src={laptop_img}
                    alt="icon"
                    />
                </div>
            </div>
            <div class="row desktop-10">
                <div class="col-sm-3">
                    <div className='desktop-text'> Socket-Link API</div>
                </div>
                <div class="col-sm-3">
                    <div className='desktop-text'>Chrome extension-base</div>
                </div>
                <div class="col-sm-3">
                    <div className='desktop-text'>Chrome extension-base</div>
                </div>
                <div class="col-sm-3">
                    <div className='desktop-text'>Chrome extension-base</div>
                </div>
            </div>
            <div class="row">        
                <div class="side-1 col-md-8">
                    <div>
                        <h4>Real time messaging multiple conference room platform.</h4>
                        <li>Stream Meeting</li>
                        <li>Configurable Slots and Slot time</li>
                        <li>save save to Socket-Link Library to easily navigate</li>
                    </div>
                </div>
                <div class="side-2 col-md-4">
                    <img
                    className="common_img-desktop img-fluid"
                    src={laptop_img}
                    alt="icon"
                    />
                </div>
            </div>

        </div>
    </>
  )
}

export default Desktop10