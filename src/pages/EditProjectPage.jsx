// src/pages/EditProjectPage.jsx
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function EditProjectPage(props) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  // Get the URL parameter `:projectId`
  const { projectId } = useParams();
  const navigate = useNavigate();

  // Effect will run after the initial render and each time
  // the `projectId` from the URL parameter changes
  useEffect(() => {
    axios
      .get(`${API_URL}/projects/${projectId}`)
      .then((response) => {
        /* the state is updated w/ the project data coming from the response.
        it sets inputs to show the actual title and description of the project */
        const oneProject = response.data;
        setTitle(oneProject.title);
        setDescription(oneProject.description);
      })
      .catch((error) => console.log(error));
  }, [projectId]);

// ==========CRUD-UPDATE============
  const handleFormSubmit = (e) => {
    e.preventDefault();
    // Create an object representing the body of the PUT request
    const requestBody = { title, description };
    // Make a PUT request to the API update the project
    axios
      .put(`${API_URL}/projects/${projectId}`, requestBody)
      .then((response) => {
        // Once the request is resolved successfully and the project
        // is updated we navigate back to the Project Details page (client-side)
        navigate(`/projects/${projectId}`);
      });
  };
// ==========CRUD-DELETE============
  const deleteProject = () => {
    axios
    .delete(`${API_URL}/projects/${projectId}`)
    .then(() => {
      navigate('/projects');
    })
    .catch((err) => console.log(err));
  };

  return (
    <div className="EditProjectPage">
      <h3>Edit the Project</h3>

      <form onSubmit={handleFormSubmit}>
        <label>Title:</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <label>Description:</label>
        <textarea
          name="description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button type="submit">Update Project</button>
        <button onClick={deleteProject}>Delete Project</button>
      </form>
    </div>
  );
}

export default EditProjectPage;
