import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import CreateProjectsList from "../Components/Dashboard/CreateProjectsList";
import "./Project-service.css"
const ProjectServices = () => {
  return (
    <div class="mainDiv">
      <div class="div1">
        <div class="minidiv1ofdiv1">
          <input class="input" type="search" placeholder="Search or go to" />
        </div>
        <div class="minidiv2ofdiv1">
          <h2>Your Work</h2>
          <button>Users</button>
          <button>Projects</button>
          <button>Projects</button>
          <button>Projects</button>
          <button>Projects</button>
          <button>Projects</button>
        </div>
      </div>
      <div class="div2">
        <div class="minidiv1ofdiv2">
          <div class="headinng">
            <h2>Projects</h2>
            <div class="btnsOfHeading">
              <button>Explore Projects</button>
              <button>New Projects</button>
            </div>
            </div>

            <div class="tags">
              <div class="miniDivOfTags1">
                <a href="#">Yours</a>
                <a href="#">Starred</a>
                <a href="#">Pending Deletion</a>
              </div>
              <div class="miniDivOfTags2">
                <a href="#">All</a>
                <a href="#">Personal</a>
              </div>
            </div>
          </div>
        </div>
        <div class="minidiv2ofdiv2"></div>
    </div>
  );
  //   return (
  //     <div>
  //       <h1>Dashboard Page</h1>

  //       <Dashboard />
  //     </div>
  //   );
};

export default ProjectServices;
