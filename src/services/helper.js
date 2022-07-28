
import axiosInstance from "../services/axios";

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
      const res = await axiosInstance.post("/user/register/", payload);
      return res;
    } catch (error) {
        throw error.response.data;
    }
  };

  export const logInApi= async (payload) => {
    try {
      const res = await axiosInstance.post("/user/login", payload);
      return res;
    } catch (error) {
      if (error.response) {  
        throw error.response.data;
      } else if (error.request) {
      } else {
      }
    }
  };
  