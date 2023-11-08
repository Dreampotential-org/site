
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import ListProjectServicesAPI from '../Components/Dashboard/ListProjectServicesAPI';
import "./ListProjectServices.css"



const ListProjectServices = () => {

const navigate = useNavigate();

  const navigateToCreateProjectService = () => {
    // 👇️ navigate to /
    navigate('/create-project-service');
  };


    return(
        <div >
        <div className="row top-div ">
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="/">Dreampotential</a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">My Builds</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
            </li>
            
        </ul>
    </nav>
    </div>
    <div className='row second-top-div'>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
        
        <ul className="navbar-nav mr-auto">
            <li className="nav-item">
                <a className="nav-link" href="#">Agents</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Test suites</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="/Settings/sshkey-list">Settings</a>
            </li>
            {/* <li className="nav-item">
                <a className="nav-link" href="/">Home</a>
            </li> */}
        </ul>
    </nav>
    </div>
    <div className='services-list'>
    <div className='row bottom'>
    <div className="navDiv">
        <nav className="navbar mynav justify-content-between">
            <a className="navbar-brand">Project Services</a>
          <form className="d-flex">
                <input className="form-control  inpt" type="search" placeholder="Search" aria-label="Search" />
                
            </form>
            <button className="btn btn-outline-success" type="button" onClick={navigateToCreateProjectService}>+</button>
        </nav>
    </div>
     </div>

        
          
        <ListProjectServicesAPI />
        
       
        
      </div>
        </div>
        
        )
        //   return (
        //     <div>
        //       <h1>Dashboard Page</h1>
        
        //       <Dashboard />
        //     </div>
        //   );
    };
    
    export default ListProjectServices;