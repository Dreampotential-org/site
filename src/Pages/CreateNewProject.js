// import React, { useState } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import 'bootstrap/dist/css/bootstrap.min.css';
// import "./CreateNewProject.css"


// const PostDataForm = () => {
//   const [repo, setRepo] = useState('');
//   const [name, setName] = useState('');
//   const navigate = useNavigate();

//   const handleSubmit = async (event) => {
//     event.preventDefault();

//     const data = {
//       repo,
//       name
//     };

//     try {
//       const token = localStorage.getItem("Token")
//       console.log(token);
//       const response = await fetch('https://api.dreampotential.org/api/project-service', {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//           // "Authorization": "Token 35025f49011eac2621d681c71f44a1f054782687d5168d1dd96ea82b6995c086"
//         //  "Authorization": `Token ${token}`
//         "Authorization": `Token ${localStorage.token}`
//         },
//         body: JSON.stringify(data)
//       });

//       if (!response.ok) {
//         throw new Error('Network response was not ok');
//       }

//       const responseData = await response.json();
//       console.log('Response:', responseData);
//       alert('POST request successful! Response: ' + JSON.stringify(responseData));
//     } catch (error) {
//       console.error('Error:', error);
//       alert('Error: ' + error.message);
//     }
//   navigate('/projectlists');
//   };

//   return (
//     <div className='new-form row'>
//     <div className='new-form-container col-4'>
   
//       <h3>New Build</h3>
//       <form onSubmit={handleSubmit}>
//       <label htmlFor="name">Name:</label><br />
//         <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
//         <label htmlFor="repo">Repo:</label><br />
//         <input type="text" id="repo" name="repo" value={repo} onChange={(e) => setRepo(e.target.value)} /><br />
//         <br />
//         <input type="submit" id="submit-btn" value="Create Build"  /><br />
//       </form>
   
//     </div>
//     </div>
//   );
// };

// export default PostDataForm;




import React, { useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import { createProjectService } from '../helper'; // Update the correct path to helper.js
import { createProjectService } from '../services/helper';
import 'bootstrap/dist/css/bootstrap.min.css';
import "./CreateNewProject.css";

const PostDataForm = () => {
  const [repo, setRepo] = useState('');
  const [name, setName] = useState('');
const navigate = useNavigate();

  // const handleSubmit = async (event) => {
  //   event.preventDefault();

  //   const data = {
  //     repo,
  //     name
  //   };

  //   try {
  //     const response = await createProjectService(data); // Call createProjectService function from helper.js

  //     if (!response.ok) {
  //       throw new Error('Network response was not ok');
  //     } 

  //     console.log('Response:', response);
  //     alert('POST request successful! Response: ' + JSON.stringify(response));
  //   } catch (error) {
  //     console.error('Error:', error);
  //     alert('Error: ' + error.message);
  //   }
  //    navigate('/projectlists');
  // };


 const handleSubmit = async (event) => {
  event.preventDefault();

  const data = {
    repo,
    name
  };

  try {
    const response = await createProjectService(data);

    // Check if response is successful (status in the 2xx range)
    if (response && response.status >= 200 && response.status < 300) {
      console.log('Response:', response.data);
      alert('POST request successful! Response: ' + JSON.stringify(response.data));
    } else {
      throw new Error('Network response was not ok');
    }
  } catch (error) {
    console.error('Error:', error);
   
  }

  navigate('/projectlists');
};


  return (
    <div className='new-form row'>
      <div className='new-form-container col-4'>
        <h3>New Build</h3>
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label><br />
          <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br /><br />
          <label htmlFor="repo">Repo:</label><br />
          <input type="text" id="repo" name="repo" value={repo} onChange={(e) => setRepo(e.target.value)} /><br /><br />
          <input type="submit" id="submit-btn" value="Create Build" /><br />
        </form>
      </div>
    </div>
  );
};

export default PostDataForm;

