import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './CardSection.css'
import Icon1 from "../../assets/Icon1.png";
import Icon2 from "../../assets/Icon2.png";
import Icon3 from "../../assets/Icon3.png";

// import Curve from '../../Assets/Curve.png'
// import Icon from '../../Assets/icon.png'
const PricingTiersList1=[
   {
    title:'Bring your Vision we manifest your projects.'
   },

];
const PricingTiersList2=[
    {
     title:'Dream Potential is an accelerator program and technology collective.'
    },

 ];
 const PricingTiersList3=[
    {
     title:'Not sure what how to enhance your organization or business.'
    },
  
 ]

 
const CardSection = ({onHandleclick}) => {


  const scrollToBottom = () => {
    onHandleclick();
  }


  return (
    <>
      <div className="">
        <Container>
          <div className="row pb-5">
            {/* <h1 className="pb-5">Pricing Tiers</h1> */}
            <div className="card-section">
              <div className="column">
                <div className="card card-1">
                  <div>
                    <img className="img-title-icon1" src={Icon1} alt="img" />
                  </div>
                  {PricingTiersList1.map((val,index) => {
                    return (
                      <div className="icon-text" key={index}>
                        <p>{val.title}</p>
                      </div>
                    );
                  })}
                  <div className="mt-5">
                    <button 
                      onClick={scrollToBottom}
                      className="btn btn-outline custom-btn">
                      Build Vision
                    </button>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card card-2">
                  <div className='mt-5'>
                    <img className="img-title" src={Icon2} alt="img" />
                    {/* <h3 className="title">$ 100/mo</h3> */}
                  </div>
                 
                   {PricingTiersList2.map((val,index) => {
                    return (
                      <div className="icon-text" key={index}>
                        {/* <img className="img-wid" src={Icon} alt="" /> */}
                        <p>{val.title}</p>
                      </div>
                    );
                  })}
                  <div className="">
                    <button
                      onClick={scrollToBottom}
                      type="button"
                      className="btn-outline custom-btn-2"
                    >
                      Apply Accelerator Program
                    </button>
                  </div>
                </div>
              </div>

              <div className="column">
                <div className="card card-3">
                  <div>
                    <img className="img-title" src={Icon3} alt="img" />
                    {/* <h3 className="title">Contact Us</h3> */}
                  </div>

                  {PricingTiersList3.map((val,index) => {
                    return (
                      <div className="icon-text" key={index}>
                        {/* <img className="img-wid" src={Icon} alt="" /> */}
                        <p>{val.title}</p>
                      </div>
                    );
                  })}

                  
                  <div className="mt-4">
                    <button
                      onClick={scrollToBottom}
                      type="button"
                      className="btn btn-outline custom-btn"
                    >
                      GET IN TOUCH
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </div>
    </>
  );
}

export default CardSection