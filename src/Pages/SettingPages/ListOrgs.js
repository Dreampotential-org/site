
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import ListOrgsAPI from '../../Components/Dashboard/ListOrgsAPI';
import "../ListProjectServices.css"


const ListOrgs = () => {

const navigate = useNavigate();

  const navigateToCreateOrg = () => {
    // 👇️ navigate to /
    navigate('/Settings/create-org');
  };


    return(
        <div >
        
        <div>
    <div class="top-div"></div>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">pipelines</a>
        <ul class="navbar-nav mr-auto">
            <li class="nav-item">
                <a class="nav-link" href="#">Agents</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="#">Test suites</a>
            </li>
            <li class="nav-item">
                <a class="nav-link" href="/Settings">Settings</a>
            </li>
        </ul>
    </nav>
    <div class="navDiv">
        <nav class="navbar mynav justify-content-between">
            <a class="navbar-brand">Orgs List</a>
            <form class="form-inline">
                <input class="form-control inpt" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="button" onClick={navigateToCreateOrg}>+</button>
            </form>
        </nav>
    </div>
</div>
        
          
        <ListOrgsAPI />
        
        
        
      
        </div>
        
        )
        
    };
    
    export default ListOrgs;