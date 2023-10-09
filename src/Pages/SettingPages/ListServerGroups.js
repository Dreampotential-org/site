
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import ListServerGroupsAPI from '../../Components/Dashboard/ListServerGroupsAPI';
import "../ListProjectServices.css"


const ListServerGroups = () => {

const navigate = useNavigate();

  const navigateToCreateServerGroup = () => {
    // 👇️ navigate to /
    navigate('/Settings/create-server-group');
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
            <a class="navbar-brand">Server Groups List</a>
            <form class="form-inline">
                <input class="form-control inpt" type="search" placeholder="Search" aria-label="Search" />
                <button class="btn btn-outline-success" type="button" onClick={navigateToCreateServerGroup}>+</button>
            </form>
        </nav>
    </div>
</div>
        
          
        <ListServerGroupsAPI />
        
        
        
      
        </div>
        
        )
        
    };
    
    export default ListServerGroups;