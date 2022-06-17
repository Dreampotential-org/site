import React from 'react'
import './Footer.css'
import twitter from "../../assets/twitter.png";
import In from "../../assets/in.png";
import facebook from "../../assets/facebook.png";
import instagram from "../../assets/instagram.png";

const Footer = ({onClick}) => {
  return (
    <>
      <div className='container-fluid footer'>
        <div>
          <h3 className='dream'>DREAM POTENTIAL</h3>
          <a href="mailto:hello@dreampotential.org" className='mobile_email'>hello@dreampotential.org</a>
        </div>
        <a href="mailto:hello@dreampotential.org" className='email'>hello@dreampotential.org</a>
        <div>
          <h3 className='follow'>follow on us</h3>
       
          <a href='https://twitter.com/' target="_blabk"><img  src={twitter} alt="" /></a>
          <a href='https://linkedin.com/' target="_blabk"><img className='logos' src={In} alt="" /></a>
          <a href='https://facebook.com/' target="_blabk"><img className='logos' src={facebook} alt="" /></a>
          <a href='https://instagram.com/' target="_blabk"><img className='logos' src={instagram} alt="" /></a>
      
        </div>
      </div>

      {/* <div class="container">
        <div class="row">
          <div class="col">
          <h5>DREAM POTENTIAL</h5>
          </div>
          <div class="col">
          <h5>hello@dreampotential.org</h5>
          </div>
          <div class="col-md-6 col-sm-12">
            <div className='col-md-12'>
           <h5>Follow us on</h5>
            <div className=''>
              <img  src={twitter} alt="" />
              <img  src={In} alt="" />
              <img  src={facebook} alt="" />
              <img  src={instagram} alt="" />
            </div>
           </div>
          </div>
        </div>
      </div> */}
    </>
  )
}

export default Footer