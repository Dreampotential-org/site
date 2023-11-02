import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Pages/Home";
import Labs from "./Pages/Labs";
import Education from "./Pages/Education";
import Settings  from "./Pages/Setting";


import Desktop10 from "./Components/Desktop10/Desktop10";
import LogIn from "./Components/LogIn/LogIn";
import SignUp from "./Components/SignUp/SignUp";
import ScrollArrow from "./Components/ScrollToTop/ScrollToTop";
import AboutUs from "./Components/Desktop-11/Desktop11";
import { useState } from "react";
import NewListProjectServices from "./Pages/NewListProjectServices";
import Test from "./Pages/Test";
import Build from "./Pages/Build";
// import Projects from "./Pages/SettingPages/Projects";
import SSHKeyList from "./Pages/SettingPages/SSHKeyList";
import PostDataFormnew from "./Pages/SettingPages/CreateSSHKey";
import AddMember from "./Pages/SettingPages/AddMember";
import MembersList from "./Pages/SettingPages/MembersList";
import CreateProject from "./Pages/SettingPages/CreateProject";
import ListProjects from "./Pages/SettingPages/ListProjects";
import CreateAPIKey from "./Pages/SettingPages/CreateAPIKey";
import ListAPIKeys from "./Pages/SettingPages/ListAPIKeys";
import CreateProjectCommand from "./Pages/SettingPages/CreateProjectCommand";
import ListProjectCommands from "./Pages/SettingPages/ListProjectCommands";
import CreateServer from "./Pages/SettingPages/CreateServer";
import ListServers from "./Pages/SettingPages/ListServers";
import CreateServerGroup from "./Pages/SettingPages/CreateServerGroup";
import ListServerGroups from "./Pages/SettingPages/ListServerGroups";
import CreateOrg from "./Pages/SettingPages/CreateOrg";
import ListOrgs from "./Pages/SettingPages/ListOrgs";
import CreateProjectService from "./Pages/CreateProjectService";
import ListProjectServicesAPI from "./Components/Dashboard/ListProjectServicesAPI";
import ListProjectServices from "./Pages/ListProjectServices";
import TeacherUI from "./Pages/ServicesPages/Teacher-UI";




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
        <Route path="/Settings/create-project-service" element={<CreateProjectService />} />
        <Route path="/dashboard/Settings/project-services" element={<Settings />} />
        <Route path="/Settings/create-org" element={<CreateOrg />} />
           <Route path="/Settings/orgs-list" element={<ListOrgs />} />
         <Route path="/Settings/create-sshkey" element={<PostDataFormnew />} />
        <Route path="/Settings/sshkey-list" element={<SSHKeyList />} />
        <Route path="/Settings/add-member" element={<AddMember />} />
         <Route path="/Settings/members-list" element={<MembersList />} />
         <Route path="/Settings/create-project" element={<CreateProject />} />
         <Route path="/Settings/projects-list" element={<ListProjects />} />
          
          {/* <Route path="/dashboard" element={<ListProjectServices />} /> */}
          <Route path="/dashboard" element={<NewListProjectServices />} />
         
          <Route path="/teacher-ui" element={<TeacherUI />} />
           <Route path="/test" element={<Test />} />
           <Route path="/projectcommand/12" element={<Build />} />
         <Route path="/Settings/create-api-key" element={<CreateAPIKey />} />
         <Route path="/Settings/api-keys-list" element={<ListAPIKeys />} />
         <Route path="/Settings/create-project-command" element={<CreateProjectCommand />} />
         <Route path="/Settings/project-commands-list" element={<ListProjectCommands />} />
         <Route path="/Settings/create-server" element={<CreateServer />} />
         <Route path="/Settings/servers-list" element={<ListServers />} />
         <Route path="/Settings/create-server-group" element={<CreateServerGroup />} />
         <Route path="/Settings/server-groups-list" element={<ListServerGroups />} />
         <Route path="/Settings/create-org" element={<CreateOrg />} />
         <Route path="/Settings/orgs-list" element={<ListOrgs />} />
      </Routes>
      <ScrollArrow />
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);