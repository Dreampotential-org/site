import axios from "axios";
const baseURL = process.env.REACT_APP_SERVER_URL;

console.log("BASEURL", baseURL);
let headers = {
  'content-type': 'application/x-www-form-urlencoded; charset=UTF-8'
};

if (localStorage.token) {
  //headers.Authorization = `Bearer ${localStorage.token}`;
  // -H "X-CSRFToken: sRba9taIPeMZDBxS3oFSpu5mYh8KgXHWLZwXPhDN7bzghDQYFBBn6fNKMjn5mlQh"
}

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers,
});

export default axiosInstance;
