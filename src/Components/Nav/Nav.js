import React from "react";
import "./Nav.css";
import NavbarSection from "../Navbar/Navbar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, Button } from "react-bootstrap";
import Icon from "../../assets/dreampotential.png";
import logo from "../../assets/White.png";
import { Link } from "react-router-dom";

const NewNav = ({ onClick }) => {
  return (
    <>
      <Container fluid className="">
        <Navbar
          collapseOnSelect
          expand="lg"
          className="nav-bg"
          bg="#1B0839"
          variant="dark"
          fluid="md"
          fixed="top"
        >
          <div className="top">
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <div className="icon-name">
            <Link to="/">
              <img className="logo-icon" src={logo} alt="icon" />
              {/* <img className="logo-name" src={Icon} alt="icon" /> */}
            </Link>  
            </div>
          </div>
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
            </Nav>
            <Nav className="nav-center">
              <Link to="/labs" className="nav-item-text">
                LABS
              </Link>
              <Link to="/education" className="nav-item-text">
                EDUCATIONS
              </Link>
              <Link to="/LogIn" className="nav-item-text">
                LOG IN
              </Link>
              <Link to="/desktop11" className="nav-item-text">
                Design
              </Link>
              <Nav.Link href="#deets">
                <button
                  type="button"
                  onClick={onClick}
                  className="join btn-primary mt-4"
                >
                  SIGN UP
                </button>
              </Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default NewNav;
