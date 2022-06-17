import React from 'react'
import './NewHero.css'
// import Frame from "../../assets/Frame_resized.png";
import Frame from "../../assets/Landsvg.svg";


import Layer_1 from "../../assets/Layer_2.png";
import NewNav from '../Nav/Nav';

const NewHero = () => {
  return (
    <> 
        <div className='hero-background'>
          {/* <NavbarSection/> */}
          <NewNav />
          <div className='middle'>
            <div className='left-text'>
              <p className='text-one'>Bring us your dreams.</p>
              <p className='text-second'>We’ll make them a reality.</p>
              <p className='text-para mt-5'>
                  We serve conscious entrepreneurs in their ambitions to make <br />
                  meaningful impact in education, e-commerce and media.
              </p>
              <button type="button" className="btn-join btn-primary mt-4">JOIN US</button>
            </div>
              <div>
                <img className="Layer_1" src={Layer_1} alt="Frame"/>
              </div>
          </div>
            <img className="frame" style={{width:'100%'}} src={Frame} alt="Frame"/>
        </div>
    </>
  )
}

export default NewHero