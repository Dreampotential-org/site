import React from 'react'
import './Nav.css'
import NavbarSection from '../Navbar/Navbar';
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import { Container ,Button} from "react-bootstrap";
import Icon from "../../assets/dreampotential.png";
import logo from "../../assets/DP-Icon-01.png";
import { Link } from "react-router-dom";

const NewNav = ({ onClick }) => {
  return (
   <>
   <Container fluid className=''>
          <Navbar collapseOnSelect expand="lg" className='nav-bg' bg="#1B0839" variant="dark" fluid="md" fixed="top" >
            <div className='top'>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <div className='icon-name'>
                  <img className="logo-icon" src={logo} alt="icon" />
                  <img className="logo-name" src={Icon} alt="icon" />
                </div>
            </div>    
            <Navbar.Collapse id="responsive-navbar-nav">
            
              <Nav className="me-auto">
                <Nav.Link href="#features" className="header">
                  {/* <img className="logo" src={Icon} alt="icon" /> */}
                  {/* <div className='icon-name'>
                  <img className="logo-icon" src={logo} alt="icon" />
                  <img className="logo-name" src={Icon} alt="icon" />
                  </div> */}
                </Nav.Link>
              </Nav>
              <Nav className="nav-center">

                <Link to="/labs" className="nav-item-text" >LABS</Link>
                <Link to="/education" className="nav-item-text" >EDUCATIONS</Link>
      

                <Nav.Link href="#deets">
                {/* <Button className="join" as="input" type="submit"  variant="outline-secondary"  value="JOIN US" /> */}
                <button type="button" onClick={onClick} className="join btn-primary mt-4">SIGN UP</button>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>
        </Container>
   </>
  )
}

export default NewNav