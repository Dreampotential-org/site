import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../../App.css';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import './ProjectList.css';

const ListProjectCommandsAPI = () => {
  const navigate = useNavigate();

  const navigateToTest = () => {
    // 👇️ navigate to /
    navigate('/test');
  };

  

  const navigateToBuild = () => {
    // 👇️ navigate to /
    navigate('/projectcommand/12');
  };



  const handleLetter = () => {
    window.open(
      // "https://join.slack.com/t/realtorstat/shared_invite/zt-23rpwwaid-KUCF74Zep7Nu5ZFvo5JGdA"
      // "https://app.slack.com/client/T05PGT5P5FV/D05SZUGV1HB"
      " https://buildkite.com/test1-1/bulk2"
    );
  };



   const onClickHandler = () => {
    window.open(
      // "https://join.slack.com/t/realtorstat/shared_invite/zt-23rpwwaid-KUCF74Zep7Nu5ZFvo5JGdA"
      // "https://app.slack.com/client/T05PGT5P5FV/D05SZUGV1HB"
      " https://github.com/orgs/Dreampotential-org/repositories"
    );
  };



  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      // const tokenWithQuotes = localStorage.getItem('Token');
      // const token = tokenWithQuotes ? tokenWithQuotes.replace(/^"(.*)"$/, '$1') : null;
       
       const token = localStorage.getItem("token");
      // const apiUrl = 'https://api.dreampotential.org/api/list-project-services';
     const apiUrl = 'https://api.dreampotential.org/api/list-project-commands';
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
         
      <div onClick={navigateToBuild} className='row content-row' key={curElem.id}>
    <div className='flx'>
    <div>
    <div onClick={navigateToBuild} className='hey'>
    <img className='buld-img' src="redcross.jpg" />
     <p>{curElem.cmd}</p>
     
    </div>
    {/* <h6>{curElem.status}</h6> */}
   
    <h6>Aaron Rosen</h6>
    </div>
    {/* <div className='fail'><h6>Failed in 0ms</h6></div> */}
    <div className='fail'><h6>{curElem.status}</h6></div>
    </div>
    </div>
          
        ))
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ListProjectCommandsAPI;






// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import '../../App.css';
// import './ProjectList.css';

// const ListProjectCommandsAPI = () => {
//   const [data, setData] = useState(null);

//   useEffect(() => {

//     const tokenWithQuotes = localStorage.getItem('Token');
//   const token = tokenWithQuotes.replace(/^"(.*)"$/, '$1');
//     // const apiUrl = 'https://api.dreampotential.org/api/list-project-service-commands/<int:project_service_id>';
//     const apiUrl = 'https://api.dreampotential.org/api/list-project-service-commands/<int:project_service_id>';
//     axios
//       .get((apiUrl), {
//         headers: {
//             // "Authorization": " Token 7f579f80d9efc1f1f5b19763cc88ad4773f87fad9f3e3589e881739d0f843e5e",
//      'Authorization': `Token ${token}`,
   
//   }
//       })
//       .then(response => {
//         setData(response.data);
//       })
//       .catch(error => {
//         console.error('Error fetching data:', error);
//       });
//   }, []);

//   return (
//     <div>
//       {data ? (
//         data.map((curElem) => (
//           <div className='row main' key={curElem.project_service_id}>
//             <div className='user-div col'>
//               <h3 className='data-value'>{curElem.project_service_id}</h3>
//             </div>
//           </div>
//         ))
//       ) : (
//         <p>Loading data...</p>
//       )}
//     </div>
//   );
// };

// export default ListProjectCommandsAPI;


