import React from "react";
import { Container, Button } from "react-bootstrap";
import Circles from "../../assets/Circles-01.svg";
import Form from 'react-bootstrap/Form';
import "./GetInTouch.css";

const GetInTouch = (props) => {
  return (
        <Container className="mt-5" ref={props.ref}>
          <div className="line-center">
            <div className="line"></div>
            <img className="img-circle" src={Circles} alt="icon" />
            <div className="line"></div>
          </div>
          <div className="form-section"> 
          <h1 className="mt-5">Get in Touch</h1>
          <Form className="touch_form mt-2">

            <Form.Label className="label">Name :</Form.Label>
            <Form.Control className="input-box" type="email" placeholder="Name" />


            <Form.Label className="label">Phone :</Form.Label>
            <Form.Control className="input-box" type="email" placeholder="Phone" />


            <Form.Label className="label">Email :</Form.Label>
            <Form.Control className="input-box" type="email" placeholder="Email" />

            <Form.Label className="label">Description :</Form.Label>
            <Form.Control className="input-box" as="textarea" rows={5} placeholder="Type you text here" />

            <Button className="btn-connect label mt-3" variant="outline-*">Connect</Button>
          </Form>
          </div>
          {/* <Row>

            <h1 className="mt-5">Get in Touch</h1>
            <Form>

              <Form.Label className="label">Name</Form.Label>
              <Form.Control className="input-box" type="email" placeholder="Name" />


              <Form.Label className="label">Phone</Form.Label>
              <Form.Control className="input-box" type="email" placeholder="Phone" />


              <Form.Label className="label">Email</Form.Label>
              <Form.Control className="input-box" type="email" placeholder="Email" />

              <Form.Label className="label">Description</Form.Label>
              <Form.Control className="input-box" as="textarea" rows={5} placeholder="Type you text here" />

              <Button className="btn-connect label mt-3" variant="outline-*">Connect</Button>
            </Form>
          </Row> */}
        </Container>
  );
};

export default GetInTouch;