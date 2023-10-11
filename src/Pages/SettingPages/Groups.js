import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";


import "../ListProjectServices.css"


const Groups = () => {
 return(<div>
  <div className='row'>
  <div className='col-3 firstdiv'>
  <div className='row top-row'>
    <input type='text' class="form-control search-inpt" placeholder='search or go to...' />
  
  </div>
  <div className='row bottom-row'>
   
   <div className='lists'>
   <h6>Your work </h6>
   <div className='project-list first'>
   <div className='icon'>
   </div>
   <a href='/Settings/projects'>Projects </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/Settings/create-org'>create-org </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
   <a href='/projects'>Issues </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/projects'>Merge request </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/projects'>Merge request </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/projects'>Merge request </a>
   </div>
   <div className='project-list'>
   <div className='icon'>
   </div>
  <a href='/projects'>Merge request </a>
   </div>
   </div>
   
   
  </div>

  
  </div>
  <div className='col-9 seconddiv'>
  <div className='row'>
    <h1>Groups Page</h1>
  </div>

  </div>
  </div>
 </div>
   
 )


}


export default Groups;