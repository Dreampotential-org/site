
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import MembersListAPI from '../../Components/Dashboard/APIMembersList';
// import MembersListAPI from '../../Components/Dashboard/MembersListAPI';
import "../ListProjectServices.css"


const MembersList = () => {

const navigate = useNavigate();

  const navigateToAddMember = () => {
    // 👇️ navigate to /
    navigate('/Settings/add-member');
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
            <a class="navbar-brand">Members List</a>
            <form class="form-inline">
                <input class="form-control inpt" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="button" onClick={navigateToAddMember}>+</button>
            </form>
        </nav>
    </div>
</div>
        
          
        <MembersListAPI />
        
        
        
      
        </div>
        
        )
        
    };
    
    export default MembersList;