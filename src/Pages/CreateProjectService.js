
import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { createProjectService } from '../helper'; // Update the correct path to helper.js
import { createProjectServiceAPI } from '../services/helper';
import 'bootstrap/dist/css/bootstrap.min.css';
// import "./ProjectList.css";
import "./CreateProjectService.css";

const CreateProjectService = () => {
  const [repo, setRepo] = useState('');
  const [name, setName] = useState('');
const navigate = useNavigate();

 
 const handleSubmit = async (event) => {
  event.preventDefault();

  const data = {
    repo,
    name
  };

  try {
    const response = await createProjectServiceAPI(data);

    // Check if response is successful (status in the 2xx range)
    if (response && response.status >= 200 && response.status < 300) {
      console.log('Response:', response.data);
      alert('POST request successful! Response: ' + JSON.stringify(response.data));
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('Error: ' + error.message);
  }

  navigate('/dashboard');
};


  return (
    <div class="container">
  <div class="row">
    <div class="col-lg-6 offset-lg-3 col-md-8 offset-md-2 col-10 offset-1 new-form">
      <div className='new-form-container'>
        <h3>New Build</h3>
        <form onSubmit={handleSubmit}>
        <div class="form-group">
          <label htmlFor="name">Name:</label>
          <input type="text" class="form-control" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} placeholder="Enter your name"/>
          </div>
          <div class="form-group">

          <label htmlFor="repo">Repo:</label>
          <input type="text" class="form-control" id="repo" name="repo" value={repo} onChange={(e) => setRepo(e.target.value)} placeholder="Enter repository"/>
          {/* <input type="submit" id="submit-btn" value="Create Build" /> */}
        </div>
          <button type="submit" class="btn btn-success" id="submit-btn">Create Build</button>
        </form>
      </div>
      </div>
      </div>
    </div>
  );
};

export default CreateProjectService;



