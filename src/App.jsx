// src/App.jsx

import "./App.css";
import { Routes, Route } from "react-router-dom"; 

import Navbar from "./components/Navbar";     
import HomePage from "./pages/HomePage";     
import ProjectListPage from "./pages/ProjectListPage";
import CreateProjectPage from "./pages/CreateProjectPage";
import ProjectDetailsPage from "./pages/ProjectDetailsPage"; 

function App() {
  return (
    <div className="App">
      
     {/* Below: ADD <Navbar>, <Routes> & <Route> */}
      <Navbar />

      <Routes>      
        <Route path="/" element={ <HomePage /> } />
        <Route path="/projects" element={<ProjectListPage />} />
        <Route exact path="/projects/create" element={<CreateProjectPage />} /> 
        <Route path="/projects/:projectId" element={<ProjectDetailsPage />} />  
      </Routes>
      
    </div>
  );
}

export default App;
