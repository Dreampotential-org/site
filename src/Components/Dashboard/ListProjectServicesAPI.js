import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';

import "./ProjectList.css";

const ListProjectServicesAPI = () => {
  const [projectServicesData, setProjectServicesData] = useState(null);
  const [projectCommandsData, setProjectCommandsData] = useState(null);

  useEffect(() => {
    // API URL for project services
    const projectServicesApiUrl = 'https://api.dreampotential.org/api/list-project-services';
    // API URL for project commands
    const projectCommandsApiUrl = 'https://api.dreampotential.org/api/list-project-commands';

    axios
      .get(projectServicesApiUrl)
      .then(response => {
        setProjectServicesData(response.data);
      })
      .catch(error => {
        console.error('Error fetching project services data:', error);
      });

    axios
      .get(projectCommandsApiUrl)
      .then(response => {
        setProjectCommandsData(response.data);
      })
      .catch(error => {
        console.error('Error fetching project commands data:', error);
      });
  }, []);

  // Function to count occurrences of statuses
  const countStatusOccurrences = () => {
    if (projectCommandsData) {
      const statusList = projectCommandsData.map(command => command.status);
      let statusCount = {};

      statusList.forEach(status => {
        if (statusCount[status]) {
          statusCount[status]++;
        } else {
          statusCount[status] = 1;
        }
      });

      return statusCount;
    }
    return {};
  };

  const generateButtons = (count) => {
    const buttons = [];
    for (let i = 0; i < count; i++) {
      buttons.push(
        <button key={i} className="status-button"></button>
      );
    }
    return buttons;
  };

  return (
    <div>
      {projectServicesData ? (
        projectServicesData.map((curElem) => (
          <div className='row main' key={curElem.id}>
            <div className='alphabate-container col-1'>
              <div className='leter-div'>
                <h3 className='leter'>{curElem.name ? curElem.name.charAt(0) : ''}</h3>
              </div>
            </div>
            <div className="user-div col">
              <h3 className='data-name'>{curElem.name}</h3>
              <h4 className='data-repo'>{curElem.repo}</h4>
              {Object.keys(countStatusOccurrences()).map((status, index) => (
                <div key={index} className='sts'>
                 {generateButtons(countStatusOccurrences()[status])}
                </div>
              ))}
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
