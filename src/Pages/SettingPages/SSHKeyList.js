
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import CreateSSHKeyList from '../../Components/Dashboard/CreateSSHKeyList';
import "../ListProjectServices.css"



const SSHKeyList = () => {

const navigate = useNavigate();

  const navigateToCreateSSHKey = () => {
    // 👇️ navigate to /
    navigate('/Settings/create-sshkey');
  };


    return(
        <div >
        <div className="row top-div ">
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">dreampotential</a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">My Builds</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">help</a>
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
                <a className="nav-link" href="/Settings">Settings</a>
            </li>
        </ul>
    </nav>
    </div>
    <div className='row bottom'>
    <div className="navDiv">
        <nav className="navbar mynav justify-content-between">
            <a className="navbar-brand">Projects</a>
          <form className="d-flex">
                <input className="form-control  inpt" type="search" placeholder="Search" aria-label="Search" />
                
            </form>
            <button className="btn btn-outline-success" type="button" onClick={navigateToCreateSSHKey}>+</button>
        </nav>
    </div>
     </div>

        
          
        <CreateSSHKeyList />
        
       
        
      
        </div>
        
        
        )
        
    };
    
    export default SSHKeyList;