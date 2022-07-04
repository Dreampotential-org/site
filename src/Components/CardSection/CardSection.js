import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./CardSection.css";
import Icon1 from "../../assets/Icon1.png";
import Icon2 from "../../assets/Icon2.png";
import Icon3 from "../../assets/Icon3.png";
import Arrow from "../../assets/right_arrow.png";
import Sailboat from "../../assets/Sailboat.png";
import { Card, CardGroup } from "react-bootstrap";

const CardSection = ({ onClick }) => {
  return (
    <>
      <div className="card-back">
        <Container>
          <h1 className="pt-5">Empower Every Team</h1>
          <div className="pb-5 pt-5 card-border">
            <Card className="card_section" style={{ width: "18rem" }}>
              <Card.Body className="back-color ">
                <Card.Title className="pb-4">
                  <div className="circle-image position-relative mt-4">
                    <div className="circle-msg-img"></div>
                  </div>
                </Card.Title>
                <Card.Text className="footer-text mb-5 pt-3">
                  Bring your Vision we manifest your projects.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer pt-4" onClick={onClick}>
                <small className="text-muted-footer"  >Build Vision</small>
                <img className="arrow" src={Arrow} alt="" />
              </Card.Footer>
            </Card>
            <Card className="card_section" style={{ width: "18rem" }}>
              <Card.Body className="back-color">
              <Card.Title className="pb-4">
                  <div className="circle-image-cloud position-relative mt-4">
                    {/* <img className="circle-msg-img" src={Icon1} alt="" /> */}
                    <div className="circle-msg-img-cloud"></div>
                  </div>
                </Card.Title>
                <Card.Text className="footer-text mt-5 mb-5">
                  Dream Potential is an accelerator program and technology
                  collective.{" "}
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer icon2-footer" onClick={onClick}>
                <small className="text-muted-footer"  >
                  Apply Accelerator <br /> program
                </small>
                <img className="arrow" src={Arrow} alt="" />
              </Card.Footer>
            </Card>
            <Card className="card_section" style={{ width: "18rem" }}>
              <Card.Body className="back-color">
                <Card.Title>
                <div className="circle-image-people position-relative mt-4">
                    <div className="circle-msg-img-people"></div>
                  </div>
                </Card.Title>
                <Card.Text className="footer-text mb-4 pt-3">
                  Not sure what how to enhance your organization or business.
                </Card.Text>
              </Card.Body>
              <Card.Footer className="card-footer icon3-footer pt-4" onClick={onClick}>
                <small className="text-muted-footer">Get In Touch</small>
                <img className="arrow" src={Arrow} alt="" />
              </Card.Footer>
            </Card>
          </div>
            <div className="Sailboat">
             </div>
          {/* <div className="row"> */}
            {/* <img className="" src={Sailboat} alt="" /> */}
      
        </Container>
      </div>
    </>
  );
};

export default CardSection;
