
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import ListAPIKeysAPI from '../../Components/Dashboard/ListAPIKeysAPI';

import "../ListProjectServices.css";


const ListAPIKeys = () => {

const navigate = useNavigate();

  const navigateToCreateAPIKey = () => {
    // 👇️ navigate to /
    navigate('/Settings/create-api-key');
  };


    return(
            <div>
  <div className='row'>
  <div className='col-3 firstdiv'>
  <div className='row top-row'>
    <input type='text' class="form-control search-inpt" placeholder='search or go to...' />
  
  </div>
  <div className='row bottom-row'>
   
   <div className='lists'>
   <h6>Your work </h6>
   {/* <div className='project-list '>
   <div className='icon'>
   </div>
  <a href='/dashboard/Settings/project-services'>Projects Services </a>
   </div> */}
   <div className='project-list '>
   <div className='icon'>
   </div>
   <a href='/Settings/sshkey-list'>SSH Key </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/Settings/orgs-list'>Orgs List </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
   <a href='/Settings/members-list'>Members List </a>
   </div>
   
   <div className='project-list first'>
   <div className='icon'>
   </div>
  <a href='/Settings/api-keys-list'>API Keys List </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/Settings/projects-list'>Projects List </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/Settings/project-commands-list'>Project Commands List </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/Settings/servers-list'>Servers List </a>
   </div>
   <div className='project-list '>
   <div className='icon'>
   </div>
  <a href='/Settings/server-groups-list'>Server Groups List </a>
   </div>
   </div>
   
   
  </div>

  
  </div>
  <div className='col-9 seconddiv'>
  <div className='row1'>
    <h1>Setting Page</h1>
  </div>
  <div className='row2'>
  <div>
  <div className='row bottom'>
    <div className="navDiv">
        <nav className="navbar mynav justify-content-between">
            <a className="navbar-brand">API Keys List</a>
          <form className="d-flex">
                <input className="form-control  inpt" type="search" placeholder="Search" aria-label="Search" />
                
            </form>
            <button className="btn btn-outline-success" type="button" onClick={navigateToCreateAPIKey}>+</button>
        </nav>
    </div>
     </div>

        
          
        <ListAPIKeysAPI />
        
       
        
      
        </div>
  {/* <ListProjectServices /> */}
 </div>
  

  </div>
  </div>
 </div>
   
        
        )
        
    };
    
    export default ListAPIKeys;