import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";

import './ProjectList.css';

const ListProjectServicesAPI = () => {
 const navigate = useNavigate();

  const navigateToTest = () => {
    // 👇️ navigate to /
    navigate('/test');
  };



  const handleLetter = () => {
    window.open(
      " https://github.com/orgs/Dreampotential-org/repositories"
    );
  };



   const onClickHandler = () => {
    window.open(
      " https://github.com/orgs/Dreampotential-org/repositories"
    );
  };



  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      const token = localStorage.getItem("token");
      const apiUrl = 'https://api.dreampotential.org/api/list-project-services';
      const response = await axios.get(apiUrl, {
        headers: {
          'Authorization': `Token ${token}`,
        }
      });
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const removePost = async (projectId) => {
    try {
      const tokenWithQuotes = localStorage.getItem('Token');
      const token = tokenWithQuotes ? tokenWithQuotes.replace(/^"(.*)"$/, '$1') : null;

      if (!token) {
        console.error('Token not found. Please log in and try again.');
        return;
      }

      // Use SweetAlert for confirmation
      const confirmation = window.confirm('Are you sure you want to delete this post?');
      if (confirmation) {
        const headers = {
          Authorization: `Token ${token}`,
        };

        const response = await axios.delete(`https://api.dreampotential.org/api/delete-project_service/${projectId}`, {
          headers,
        });

        console.log('Post deleted:', response.data);

        fetchData();
      }
    } catch (error) {
      console.error('Error deleting post:', error);
    }
  };

  return (
    <div>
      {data ? (
        data.map((curElem) => (
          <div className='row main' key={curElem.id}>
            <div className='alphabate-container col-1'>
              <div className='leter-div ' onClick={navigateToTest}>
                <h3 className='leter align-middle text-center'>{curElem.name ? curElem.name.charAt(0) : ''}</h3>
              </div>
            </div>
            <div className='user-div col-5 '>
              {/* <p className='data-name'>{curElem.project_service_id}</p> */}
              <div>
              <p className='data-name'>{curElem.name}</p>
              <p className='data-repo'>{curElem.repo}</p>
              </div>
              
              </div>
              <div className='col-5 command-line'>
              <div className='command-line-green'></div>
               <div className='command-line2'></div>
                <div className='command-line2'></div>
                 <div className='command-line2'></div>
               <div className='command-line-green'></div>
                <div className='command-line2'></div>
                 <div className='command-line2'></div>
               <div className='command-line-green'></div>
                <div className='command-line2'></div>
               <div className='command-line2'></div>
                <div className='command-line2'></div>
               <div className='command-line-green'></div>
              <div onClick={onClickHandler} className='command-line1'></div>
                <div className='command-line1'></div>
                <div className='command-line1'></div>
               <div className='command-line1'></div>
                <div className='command-line1'></div>
                <div className='command-line1'></div>
                <div className='command-line'></div>
               <div className='command-line1'></div>
                <div className='command-line1'></div>
                <div className='command-line1'></div>
                <div className='command-line1'></div>
                <div className='command-line1'></div>
                <div className='command-line1'></div>
                <div className='command-line1'></div>
                <div className='command-line1'></div>
                  <div className='command-line1'></div>
                <div className='command-line1'></div>
                <div className='command-line1'></div>
              <div className='command-line-grey'></div>
              </div>
              
            <div className='col-1'>
              <button
                className='btn btn-outline-success remove'
                type='button'
                onClick={() => removePost(curElem.id)}
              >
                -
              </button>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ListProjectServicesAPI;







