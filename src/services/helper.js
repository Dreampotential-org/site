
import axiosInstance from "../services/axios";
import axios from "axios";

export const leadCreateApi = async (payload) => {

    try {
    const res = await axiosInstance
      .post("/lead/", payload);
    console.log("res=>", res);
    return res;
  } catch (err) {
    if (err.res) {
    } else if (err.request) {
      // The request was made but no response was received   
      var resp = JSON.parse(err.request.response);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.log("Error", err.message);
    }
  }
  };

  export const signUPApi = async (payload) => {
    try {
      
      // const res = await axiosInstance.post("http://app.realtorstat.com:8021/usersystem/user/register", payload);
      const res = await axiosInstance.post("https://api.dreampotential.org/usersystem/user/register", payload);
      // const res = await axiosInstance.post("/usersystem/user/register/", payload);
      localStorage.setItem('Token', JSON.stringify(res.token));
      return res;
    } catch (error) {
        throw error.response.data;
    }
  };



export const createProjectService = async (payload) => {
  const token = localStorage.getItem("Token")
  try {
    // const res = await axiosInstance.post("https://api.dreampotential.org/api/project-service", payload);
   const res = await axios.post("https://api.dreampotential.org/api/project-service", payload, {
  headers: {
    'Authorization': `Token ${token}` 
  }
})
    
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 

export const list_project_services = async(payload) => {
  try {
    const res = await axiosInstance.get("https://api.dreampotential.org/api/list-project-services", payload);
    return res;
  } catch (error) {
    if (error.response) {  
      throw error.response.data;
    } else if (error.request) {
    } else {
    }
  }

} 




  export const logInApi= async (payload) => {
    try {
      // const res = await axiosInstance.post("http://app.realtorstat.com:8021/usersystem/user/login", payload);
      const res = await axiosInstance.post("https://api.dreampotential.org/usersystem/user/login", payload);
      localStorage.setItem('Token', JSON.stringify(res.token));
      return res;
      
    } catch (error) {
      if (error.response) {  
        throw error.response.data;
      } else if (error.request) {
      } else {
      }
    }
  };


  
  