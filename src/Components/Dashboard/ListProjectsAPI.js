import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import './ProjectList.css';

const ListProjectsAPI = () => {
  const [data, setData] = useState(null);

  useEffect(() => {

    const tokenWithQuotes = localStorage.getItem('Token');
  const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
    const apiUrl = 'https://api.dreampotential.org/api/list-projects';

    axios
      .get((apiUrl), {
        headers: {
            // "Authorization": " Token 7f579f80d9efc1f1f5b19763cc88ad4773f87fad9f3e3589e881739d0f843e5e",
     'Authorization': `Token ${token}`,
   
  }
      })
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
            <div className='user-div col'>
              <h3 className='data-value'>{curElem.value}</h3>
            </div>
          </div>
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ListProjectsAPI;


