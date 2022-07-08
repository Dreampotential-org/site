import React from 'react'
import './Footer.css'
import twitter from "../../assets/twitter.png";
import In from "../../assets/in.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";
import logo from "../../assets/White.png";


const Footer = ({onClick}) => {
  return (
    <>
      <div className='footer py-5'>
        {/* <div>
          <h3 className='dream'>DREAM POTENTIAL</h3>
          <a href="mailto:hello@dreampotential.org" className='mobile_email'>hello@dreampotential.org</a>
        </div> */}
        {/* <a href="mailto:hello@dreampotential.org" className='email'>hello@dreampotential.org</a> */}
        {/* <div>
          <h3 className='follow'>Follow us on</h3>
       
          <a href='https://twitter.com/' target="_blabk"><img  src={twitter} alt="" /></a>
          <a href='https://linkedin.com/' target="_blabk"><img className='logos' src={In} alt="" /></a>
          <a href='https://www.facebook.com/dreampotential.org' target="_blabk"><img className='logos' src={facebook} alt="" /></a>
          <a href='https://instagram.com/' target="_blabk"><img className='logos' src={instagram} alt="" /></a>
      
        </div> */}
        <div className='container'>
          <div className='row'>
            <div className='col-md-6'>
              <img className="logo-icon" src={logo} alt="icon" />
            </div>
            <div className='col-md-6'>
            <div>
              <div className='row'>
                  <div className='col-md-3'>
                  <h4>About us</h4>
                  </div>
                  <div className='col-md-3'>
                  <h4>Resource</h4>
                  <div style={{}}>
                    <h6 className='sub-text-footer'>education</h6>
                    <h6 className='sub-text-footer'>labs</h6>
                  </div>
                  </div>
                  <div className='col-md-1'>
                    <div class="vl"></div>
                  </div>

                  <div className='col-md-5'>
                    <h4>Contact Us</h4>
                    <h6 className='sub-text-footer'>A@Dreampotential.org</h6>
                    <h6 className='sub-text-footer'>0917 385 6632</h6>

                  <div className='mt-5'>
                      <a href='https://twitter.com/' target="_blabk"><img  src={twitter} alt="" /></a>
                      <a href='https://linkedin.com/' target="_blabk"><img className='logos' src={In} alt="" /></a>
                      <a href='https://www.facebook.com/dreampotential.org' target="_blabk"><img className='logos' src={facebook} alt="" /></a>
                      <a href='https://instagram.com/' target="_blabk"><img className='logos' src={instagram} alt="" /></a>
                  </div>

                  </div>
              </div>
              
              </div> 
            </div>


            <div className='row mt-5' style={{color:"#fff"}}>
            <div className='col-md-6'>
              <h6>@ 2022 Dreampotential.org, Inc.All rights reserved</h6>
            </div>
            <div className='col-md-4'>
              {/* <h6>www.dreampotential.org</h6> */}
            </div>
            <div className='col-md-2'>
                <div>
                <h6>www.dreampotential.org</h6>
                      {/* <a href='https://twitter.com/' target="_blabk"><img  src={twitter} alt="" /></a>
                      <a href='https://linkedin.com/' target="_blabk"><img className='logos' src={In} alt="" /></a>
                      <a href='https://www.facebook.com/dreampotential.org' target="_blabk"><img className='logos' src={facebook} alt="" /></a>
                      <a href='https://instagram.com/' target="_blabk"><img className='logos' src={instagram} alt="" /></a> */}
                  </div>
            </div>
          </div>
          </div>
        </div>
       

      </div>
    </>
  )
}

export default Footer