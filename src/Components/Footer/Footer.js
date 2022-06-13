import React from 'react'
import './Footer.css'

const Footer = ({onClick}) => {
  return (
    <>
      <div className='container-fluid footer'>
        <div>
          <h3 className='dream'>DREAM POTENTIAL</h3>
          <a href="mailto:hello@dreampotential.org" className='mobile_email'>hello@dreampotential.org</a>
        </div>
        <a href="mailto:hello@dreampotential.org" className='email'>hello@dreampotential.org</a>
        <li onClick={onClick} className="footer_join_buttton">JOIN US</li>
      </div>
    </>
  )
}

export default Footer