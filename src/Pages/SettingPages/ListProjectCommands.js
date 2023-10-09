
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import ListProjectCommandsAPI from '../../Components/Dashboard/ListProjectCommandsAPI';
import "../ListProjectServices.css"


const ListProjectCommands = () => {

const navigate = useNavigate();

  const navigateToCreateProjectCommand = () => {
    // 👇️ navigate to /
    navigate('/Settings/create-project-command');
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
            <a class="navbar-brand">Project Commands List</a>
            <form class="form-inline">
                <input class="form-control inpt" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="button" onClick={navigateToCreateProjectCommand}>+</button>
            </form>
        </nav>
    </div>
</div>
        
          
        <ListProjectCommandsAPI />
        
        
        
      
        </div>
        
        )
        
    };
    
    export default ListProjectCommands;