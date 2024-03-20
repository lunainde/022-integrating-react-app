// src/pages/ProjectDetailsPage.jsx

import { useState, useEffect } from "react";
import axios from "axios";
// import { Link } from "react-router-dom";
// Get the URL parameter `:projectId`
import { Link, useParams } from "react-router-dom";  
import TaskCard from "../components/TaskCard";
import AddTask from "../components/AddTask";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function ProjectDetailsPage (props) {
  
  const [project, setProject] = useState(null);
    // Get the URL parameter `:projectId`retrieved from URL
    const { projectId } = useParams();  
  
    // Helper function that makes a GET request to the API
    // and retrieves the project by id
    const getProject = () => {
        axios
        .get(`${API_URL}/projects/${projectId}?_embed=tasks`)
        .then((response) => {
        const oneProject = response.data;
        setProject(oneProject);
        })
        .catch((error) => console.log(error));
    };
    //it renders 1st time only & call getProject() to fetch projects to initial state 
    useEffect(()=> { getProject() }, [] );

  return (
    <div className="ProjectDetailsPage">
        {project && (
            <>
            <h1>{project.title}</h1>
            <p>{project.description}</p>
            </>
        )}

  {/* ADD TASK -> refresh project*/}
  <AddTask refreshProject={getProject} projectId={projectId} />
  
  {project &&
        project.tasks.map((task) => (
          <TaskCard key={task.id} {...task} /> 
        ))}

        <Link to="/projects"><button>Back to projects</button></Link>
        <Link to={`/projects/edit/${projectId}`}><button>Edit Project</button></Link>      
    
    </div>
  );
}

export default ProjectDetailsPage;
