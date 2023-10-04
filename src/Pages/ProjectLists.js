
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CreateProjectsList from '../Components/Dashboard/CreateProjectsList';


const ProjectLists = () => {

const navigate = useNavigate();

  const navigateToCreateProject = () => {
    // 👇️ navigate to /
    navigate('/create-new-project');
  };


    return(
        <div className='row'>
        
        <div className=''>
        <div className='top-div'>
        
        </div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
        <a class="navbar-brand" href="#">pipelines</a>
        
        <ul class="navbar-nav mr-auto">
        <li class="nav-item ">
        <a class="navbar-brand" href="#">Agents</a>
        </li>
        <li class="nav-item">
        <a class="navbar-brand" href="#">Test suttes</a>
        </li>
        <li class="nav-item">
        <a class="navbar-brand" href="#">Settings</a>
        </li>
        
        </ul>
        </nav>
        
        <div className="navDiv">
        
        <nav class="navbar navbar-light bg-light justify-content-between">
        <a class="navbar-brand">ProjectServices</a>
        <form class="form-inline">
        <input class="form-control  inpt" type="search" placeholder="Search" aria-label="Search" />
        <button class="btn btn-outline-success my-2 my-sm-0" onClick={navigateToCreateProject} type="submit">+</button>
        </form>
        </nav>
        
        </div>
        <CreateProjectsList />
        
        
        
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
    
    export default ProjectLists;