import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import ListProjectServicesAPI from '../Components/Dashboard/ListProjectServicesAPI';
import "./ListProjectServices.css"



const ListProjectServices = () => {

const navigate = useNavigate();

  const navigateToCreateProjectService = () => {
    // 👇️ navigate to /
    navigate('/Settings/create-project-service');
  };


    return(
        <div >
       
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
        
        )
      
    };
    
    export default ListProjectServices;