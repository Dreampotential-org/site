import React from "react";
import Icon from "../../assets/DP-Icon-01.png";
import { Link } from "react-router-dom";
import "./Navbar.css";

const NavbarSection = ({ onClick }) => {
  return (
    <>
      <div className="nav">
        <div className="nav-menu-1 col-xl-8 col-lg-6 col-md-12 col-sm-12">
          <Link to="/" className="nav-menu-1 col-xl-8 col-lg-6 col-md-12 col-sm-12">
            <img className="logo" src={Icon} alt="icon" />
            <span className="title">DREAM POTENTIAL</span>
          </Link>
        </div>
        <div className="nav-menu-2 col-xl-4 col-lg-6 col-md-12 col-sm-12">
          <Link to="/labs" className="nav-item" >LABS</Link>
          <Link to="/education" className="nav-item" >EDUCATIONS</Link>
          <li className="join_buttton" onClick={onClick}>JOIN US</li>
        </div>
        <div onClick={onClick} className="mob_join_buttton">JOIN US</div>
      </div>
    </>
  );
};

export default NavbarSection;
