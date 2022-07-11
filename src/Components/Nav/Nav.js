import React from "react";
import "./Nav.css";
import NavbarSection from "../Navbar/Navbar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container, Button } from "react-bootstrap";
import Icon from "../../assets/dreampotential.png";
import logo from "../../assets/White.png";
// import { Link } from "react-router-dom";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const NewNav = ({ onClick }) => {

  const [isSelected, setIsSelected] = useState("");
  const handleSelection = (text) => {
    console.log("============================>" + text);
    setIsSelected(text);
  };


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
              <NavLink to="/labs" className="nav-item-text">
                    <div
                    className={
                      isSelected === "LABS" ? "label-div active" : "label-div"
                    }
                    onClick={() => handleSelection("LABS")}
                  >
                    <label className="txtLabel1"> LABS </label>
                  </div>
              </NavLink>
              <NavLink to="/education"  className="nav-item-text">
                    <div
                    className={
                      isSelected === "EDUCATIONS " ? "label-div active" : "label-div"
                    }
                    onClick={() => handleSelection("EDUCATIONS")}
                  >
                    <label className="txtLabel1"> EDUCATIONS </label>
                  </div>
              </NavLink>
              {/* <Link to="/education" className="nav-item-text">
                EDUCATIONS
              </Link> */}
              {/* <Link to="/LogIn" className="nav-item-text">
                LOGIN
              </Link> */}
              {/* <NavLink to="/signup" className="nav-item-text">
                 <div
                    className={
                      isSelected === "SIGNUP " ? "label-div active" : "label-div"
                    }
                    onClick={() => handleSelection("SIGNUP")}
                  >
                    <label className="txtLabel1"> SIGNUP </label>
                  </div>
              </NavLink> */}
              <NavLink to="/aboutus" className="nav-item-text">
                 <div
                    className={
                      isSelected === "ABOUTUS " ? "label-div active" : "label-div"
                    }
                    onClick={() => handleSelection("ABOUTUS")}
                  >
                    <label className="txtLabel1"> ABOUTUS </label>
                  </div>
              </NavLink>
              {/* <Link to="/desktop11" className="nav-item-text">
                Design
              </Link> */}

              <NavLink to="/signup" className="nav-item-text">
                <div
                  className={
                    isSelected === "SIGNUP" ? "label-div active" : "label-div"
                  }
                  onClick={() => handleSelection("SIGNUP")}
                >
                  <div className="txtLabel1"> SIGNUP </div>
                </div>
              </NavLink>

              {/* <NavLink to="/signup" className="nav-item-button">
                <button
                  type="button"
                  onClick={onClick}
                  className="join btn-primary "
                >
                  SIGN UP
                </button>
              </NavLink> */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default NewNav;
