
import axiosInstance from "../services/axios";


export const leadCreateApi = (payload) => {

    return axiosInstance
      .post("/lead/", payload)
      .then((res) => {
        console.log("res=>", res);
        return res;
      })
      .catch((err) => {
        if (err.res) {
          // Request made and server responded
        } else if (err.request) {
          // The request was made but no response was received
          console.log(err.request);
          var resp = JSON.parse(err.request.response);
          //    alert(resp.message);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log("Error", err.message);    
        }
      });
  };