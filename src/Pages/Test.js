
import React, {useEffect, useRef, useState } from 'react';
import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import axios from 'axios';
import ListProjectCommandsAPI from '../Components/Dashboard/ListProjectCommandsAPI';
import ListProjectServicesAPI from '../Components/Dashboard/ListProjectServicesAPI';
import "./ListProjectServices.css"



const Test = () => {

const navigate = useNavigate();

  const navigateToCreateProjectService = () => {
    // 👇️ navigate to /
    navigate('/create-project-service');
  };


  const [data, setData] = useState(null);

  const fetchData = async () => {
    try {
      // const tokenWithQuotes = localStorage.getItem('Token');
      // const token = tokenWithQuotes ? tokenWithQuotes.replace(/^"(.*)"$/, '$1') : null;
       
       const token = localStorage.getItem("token");
    //   const apiUrl = 'https://api.dreampotential.org/api/list-project-services';
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


    return(
        <div >
        <div className="row top-div ">
        <nav className="navbar navbar-expand-lg navbar-light ">
        <a className="navbar-brand" href="#">Dreampotential</a>
        <ul className="navbar-nav">
            <li className="nav-item">
                <a className="nav-link" href="#">My Builds</a>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="#">Help</a>
            </li>
            
        </ul>
    </nav>
    </div>
    
    <div className='services-list'>
    <div className='row bottom test'>
    <div className="navDiv">
        <nav className="navbar mynav justify-content-between">
           
            <div className='img-heading'>
            {/* <div className='newImg'></div> */}
             <img className='newImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-Afflnp1Ly4PYO2Zf_MnEUljuBRP-I23Gg&usqp=CAU" />
           
            <a className="navbar-brand">bulk2</a>
            </div>
            
            
        

            
          {/* <form className="d-flex">
                <input className="form-control  inpt" type="search" placeholder="Search" aria-label="Search" />
                
            </form> */}
            
            <img className='buld-img' src="data:image/png;base64,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" />
            
        </nav>
      
        <div className='filter-div'>
        <img className='filter-img' src='filter.png' alt="filter" />
        <p className='filter-h5'>Filter</p>
        </div>
        
    </div>
    
     </div>

        
       
        
       
        
      </div>
     <div className='services-list'>
    <div className='row bottom test'>
    <div className="navDiv command-X">
    <div className='row titl-row'><p style={{color:"black"}}>Main</p></div>
    <ListProjectCommandsAPI />
   
     </div>
    
    </div>
    </div>
   
        </div>
        
        )
        
    };
    
    export default Test;



// import React, {useEffect, useRef, useState } from 'react';
// import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
// import axios from 'axios';
// import ListProjectServicesAPI from '../Components/Dashboard/ListProjectServicesAPI';
// import "./ListProjectServices.css"



// const Test = () => {

// const navigate = useNavigate();

//   const navigateToCreateProjectService = () => {
//     // 👇️ navigate to /
//     navigate('/create-project-service');
//   };


//   const [data, setData] = useState(null);

//   const fetchData = async () => {
//     try {
//       // const tokenWithQuotes = localStorage.getItem('Token');
//       // const token = tokenWithQuotes ? tokenWithQuotes.replace(/^"(.*)"$/, '$1') : null;
       
//        const token = localStorage.getItem("token");
//     //   const apiUrl = 'https://api.dreampotential.org/api/list-project-services';
//      const apiUrl = 'https://api.dreampotential.org/api/list-project-commands';
//       const response = await axios.get(apiUrl, {
//         headers: {
//           'Authorization': `Token ${token}`,
//         }
//       });
//       setData(response.data);
//     } catch (error) {
//       console.error('Error fetching data:', error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   const removePost = async (projectId) => {
//     try {
//       const tokenWithQuotes = localStorage.getItem('Token');
//       const token = tokenWithQuotes ? tokenWithQuotes.replace(/^"(.*)"$/, '$1') : null;

//       if (!token) {
//         console.error('Token not found. Please log in and try again.');
//         return;
//       }

//       // Use SweetAlert for confirmation
//       const confirmation = window.confirm('Are you sure you want to delete this post?');
      
//       if (confirmation) {
//         const headers = {
//           Authorization: `Token ${token}`,
//         };

//         const response = await axios.delete(`https://api.dreampotential.org/api/delete-project_service/${projectId}`, {
//           headers,
//         });

//         console.log('Post deleted:', response.data);

//         fetchData();
//       }
//     } catch (error) {
//       console.error('Error deleting post:', error);
//     }
//   };


//     return(
//         <div >
//         <div className="row top-div ">
//         <nav className="navbar navbar-expand-lg navbar-light ">
//         <a className="navbar-brand" href="#">Dreampotential</a>
//         <ul className="navbar-nav">
//             <li className="nav-item">
//                 <a className="nav-link" href="#">My Builds</a>
//             </li>
//             <li className="nav-item">
//                 <a className="nav-link" href="#">Help</a>
//             </li>
            
//         </ul>
//     </nav>
//     </div>
    
//     <div className='services-list'>
//     <div className='row bottom test'>
//     <div className="navDiv">
//         <nav className="navbar mynav justify-content-between">
           
//             <div className='img-heading'>
//             {/* <div className='newImg'></div> */}
//              <img className='newImg' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQC-Afflnp1Ly4PYO2Zf_MnEUljuBRP-I23Gg&usqp=CAU" />
           
//             <a className="navbar-brand">bulk2</a>
//             </div>
            
            
        

            
//           {/* <form className="d-flex">
//                 <input className="form-control  inpt" type="search" placeholder="Search" aria-label="Search" />
                
//             </form> */}
            
//             <img className='buld-img' src="data:image/png;base64,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" />
            
//         </nav>
      
//         <div className='filter-div'>
//         <img className='filter-img' src='filter.png' alt="filter" />
//         <p className='filter-h5'>Filter</p>
//         </div>
        
//     </div>
    
//      </div>

        
       
        
       
        
//       </div>
//      <div className='services-list'>
//     <div className='row bottom test'>
//     <div className="navDiv command-X">
//     <div className='row titl-row'><p style={{color:"black"}}>Main</p></div>
//    <div className='row content-row'>
//     <div className='flx'>
//     <div>
//     <div className='hey'>
//     <img className='buld-img' src="redcross.jpg" />
//      <p> X state-KY-command-crawl_zillow_address_new</p>
     
//     </div>
//     <h6>Aaron Rosen</h6>
//     </div>
//     <div className='fail'><h6>Failed in 0ms</h6></div>
//     </div>
//     </div>
//     <div className='row content-row'>
//     <div className='flx'>
//     <div>
//     <div className='hey'>
//     <img className='buld-img' src="redcross.jpg" />
//      <p> X state-KY-command-crawl_zillow_address_new</p>
//     </div>
//     <h6>Aaron Rosen</h6>
//     </div>
//     <div className='fail'><h6>Failed in 0ms</h6></div>
//     </div>
//     </div>
//     <div className='row content-row'>
//     <div className='flx'>
//     <div>
//     <div className='hey'>
//     <img className='buld-img' src="redcross.jpg" />
//      <p> X state-KY-command-crawl_zillow_address_new</p>
//     </div>
//     <h6>Aaron Rosen</h6>
//     </div>
//     <div className='fail'><h6>Failed in 0ms</h6></div>
//     </div>
//     </div>
//      <div className='row content-row'>
//     <div className='flx'>
//     <div>
//     <div className='hey'>
//     <img className='buld-img' src="redcross.jpg" />
//      <p> X state-KY-command-crawl_zillow_address_new</p>
//     </div>
//     <h6>Aaron Rosen</h6>
//     </div>
//     <div className='fail'><h6>Failed in 0ms</h6></div>
//     </div>
//     </div>
//      </div>
    
//     </div>
//     </div>
//         </div>
        
//         )
//         //   return (
//         //     <div>
//         //       <h1>Dashboard Page</h1>
        
//         //       <Dashboard />
//         //     </div>
//         //   );
//     };
    
//     export default Test;