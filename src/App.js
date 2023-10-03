import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Labs from "./Pages/Labs";
import Education from "./Pages/Education";

//import PostDataForm from "./Pages/CreateNewProject";
import Desktop10 from "./Components/Desktop10/Desktop10";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import ScrollArrow from "./Components/ScrollToTop/ScrollToTop";
import AboutUs from "./Components/Desktop-11/Desktop11";
import { useState } from "react";
//import ProjectLists from "./Pages/ProjectLists";


export default function App() {


  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="labs" element={<Labs />} />
        <Route path="education" element={<Education />} />
        <Route path="desktop10" element={<Desktop10 />} />
        <Route path="aboutus" element={<AboutUs />} />
        <Route path="LogIn" element={<LogIn />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
      <ScrollArrow />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
