//ProjectListPage.jsx
//Get Initial Data - GET request
import React from 'react';
// useEffect => GET
import { useState, useEffect } from "react"; 
// top of ea. component making requests to the backend.
import axios from "axios";
import { Link } from "react-router-dom";

import ProjectCard from "../components/ProjectCard";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";


function ProjectListPage() {
    //to change the value of projects, call setProjects with the new value.
    const [projects, setProjects] = useState([]);

    const getAllProjects = () => {
      //axios =JS library for HTTP requests, to fetch data from an API
      axios
      .get(`${API_URL}/projects?_embed=tasks`)
      //promise (synchornization or responses) => call useState to update(APIdata)
      .then((response) => setProjects(response.data))
      //promise in case of error loged in the console
      .catch((error) => console.log(error));
  };
  // This effect will run only once, after the initial render
  // by setting the empty dependency array - []
  useEffect(() => { getAllProjects() }, [] );


  return (
    <div className="ProjectListPage">

    <Link to="/projects/create">          
        <button>Create Project</button>
      </Link> 
      { projects.map((project) => (
        <ProjectCard key={project.id} {...project} />  
      ))}     

    </div>
  );
}

export default ProjectListPage;
