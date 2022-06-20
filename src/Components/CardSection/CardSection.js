import React from 'react'
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import './CardSection.css'
import Icon1 from "../../assets/Icon1.png";
import Icon2 from "../../assets/Icon2.png";
import Icon3 from "../../assets/Icon3.png";
import Arrow from "../../assets/right_arrow.png";
import Sailboat from "../../assets/Sailboat.png";
import { Card,CardGroup } from 'react-bootstrap'

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
      <div className="card-back">
        <Container>
          <div className="row pb-5">
           
          <CardGroup>
            
            <Card  className='card1'>
          
              <Card.Body className="back-color" >
                <Card.Title>
                <div className="circle-image mt-4">
                    <img className="circle-msg-img" src={Icon1} alt=""/>
                </div>
                </Card.Title>
                <Card.Text className='footer-text mb-4'>
                Bring your Vision we manifest your projects.
                </Card.Text>
              </Card.Body>
              <Card.Footer className='card-footer'>
                <small className="text-muted-footer">Build Vision</small>
                <img className="arrow" src={Arrow} alt=""/>
              </Card.Footer>
            </Card>
            <Card className='card2'>
              {/* <Card.Img variant="top" src={Icon2} /> */}
              <Card.Body className="back-color">
                <Card.Title>
                <div className="circle-image-icon2 mt-4">
                <img className="circle-msg-img2" src={Icon2} alt=""/>
                </div>
                </Card.Title>
                <Card.Text className='footer-text mb-4'>
                Dream Potential is an accelerator program and technology collective.{' '}
                </Card.Text>
              </Card.Body>
              <Card.Footer className='icon2-footer'>
                <small className="text-muted-footer">Apply Accelerator program</small>
                <img className="arrow" src={Arrow} alt=""/>
              </Card.Footer>
            </Card>
            <Card className='card3'>
              {/* <Card.Img variant="top" src={Icon3} /> */}
              <Card.Body className="back-color">
                <Card.Title>
                <div className="circle-image-icon3 mt-4">
                <img className="circle-msg-img" src={Icon3} alt=""/>
                </div>
                </Card.Title>
                <Card.Text className='footer-text mb-4'>
                Not sure what how to enhance your organization or business.
                </Card.Text>
              </Card.Body>
              <Card.Footer className='icon3-footer'>
                <small className="text-muted-footer">Get in Touch</small>
                <img className="arrow" src={Arrow} alt=""/>
              </Card.Footer>
            </Card>
          </CardGroup>

          </div>

         
          <div className="row mt-5 pb-5">
              <img className="" src={Sailboat} alt=""/>
          </div>
        </Container>
        
      </div>
    </>
  );
}

export default CardSection