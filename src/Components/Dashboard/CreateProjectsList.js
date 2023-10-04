import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';

import "./ProjectList.css";



const CreateProjectsList = () => {
  const [data, setData] = useState(null);

  useEffect(() => {
    const apiUrl = 'https://api.dreampotential.org/api/list-project-services';

    axios
      .get(apiUrl)
      .then(response => {
        setData(response.data);
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
  }, []);

  return (
    <div>
      {data ? (
        data.map((curElem) => (
          <div className='row main' key={curElem.id}>
            <div className='alphabate-container col-1'>
              <div className='leter-div'>
                <h3 className='leter'>{curElem.name ? curElem.name.charAt(0) : ''}</h3>
              </div>
            </div>
            <div className="user-div col">
              <h3 className='data-name'>{curElem.name}</h3>
              <h4 className='data-repo'>{curElem.repo}</h4>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );            
};

export default CreateProjectsList;
