import React from "react";
import "./Nav.css";
import NavbarSection from "../Navbar/Navbar";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { useNavigate } from "react-router-dom";
import { Container, Button } from "react-bootstrap";
import Icon from "../../assets/dreampotential.png";
import logo from "../../assets/White.png";
import { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { getToken } from "../../services/helper";


const NewNav = ({ onClick }) => {

  const isLoggedin = getToken() !== '';
  const navigate = useNavigate();

const handleLogout = () => {
    localStorage.removeItem('Token');
    navigate('/'); // Navigate to the home page
};

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
          className="nav-bg p-2"
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
            <Nav className="me-auto"></Nav>
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

            {isLoggedin && (
              <NavLink to="/dashboard" className="nav-item-text">
                <div
                  className={
                    isSelected === "Dashboard "
                      ? "label-div active"
                      : "label-div"
                  }
                  onClick={() => handleSelection("Dashboard")}

                >
                  <label className="txtLabel1"> DASHBOARD </label>
                </div>
              </NavLink>
            )}

      {!isLoggedin && (
        <NavLink to="/signup" className="nav-item-text">
          <div
            className={isSelected === 'SIGNUP' ? 'label-div active' : 'label-div'}
            onClick={() => handleSelection('SIGNUP')}
          >
            <div className="txtLabel1"> SIGNUP </div>
          </div>
        </NavLink>
      )}
    {isLoggedin && (
        <div
            className={`nav-item-text ${isSelected === 'LOGOUT' ? 'label-div active' : 'label-div'}`}
            onClick={handleLogout}
        >
       <div className="txtLabel1"> LOGOUT </div>
     </div>
      )}

      {/* {isLoggedin && (
        <NavLink to="" className="nav-item-text">
          <div
            className={isSelected === 'LOGOUT' ? 'label-div active' : 'label-div'}
            // onClick={() => handleSelection('LOGOUT')}
            onClick={handleLogout}
          >
            <div className="txtLabel1"> LOGOUT </div>
          </div>
        </NavLink>
      )} */}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </Container>
    </>
  );
};

export default NewNav;
