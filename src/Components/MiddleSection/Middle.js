import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import "./Middle.css";

const Middle = ({onClick}) => {
  return (
    <Container className="pb-5">
      <div className="middle_section">
      <div className="middle_card">
            <p className="text">
              Dream Potential is an <br />
              accelerator program and <br />
              atechnology collective.
            </p>
            <Button className="btns" onClick={onClick}>Apply Accelerator Program</Button>
          </div>
          <div className="middle_card">
            <p className="text">
              Bring your Vision we <br />
              manifest your projects.
            </p>
            <Button onClick={onClick} className="btns mt-4">Build Vision</Button>
          </div>
          <div className="middle_card">
            <p className="text">
              Not sure what how to <br />
              enhance your organization <br />
              or business.
            </p>
            <Button onClick={onClick} className="btns">Get in Touch</Button>
          </div>
      </div>
    </Container>
  );
};

export default Middle;
