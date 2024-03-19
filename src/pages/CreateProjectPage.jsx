//CreateProjectPage.jsx
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const API_URL = "https://project-management-api-4641927fee65.herokuapp.com";

function CreateProjectPage(props) {
    const [title, setTitle] = useState("");
    const [description, setDescription] = useState("");
   //to redirect the user to another page = navigate
    const navigate = useNavigate();
    
    //onSubmit event handler to the form
    const handleSubmit = (e) => {
        e.preventDefault();
        const requestBody = { title, description };
            //axios =JS library for HTTP requests, to fetch/post data to/from API
            axios
            .post(`${API_URL}/projects`, requestBody)
            .then((response) => {
            // Once the project is created navigate to Project List Page
            navigate("/projects");
            })
            .catch((error) => console.log(error));
    }
   
    return (
      <div className="CreateProjectPage">
        <h3>Add Project</h3>
   
        <form onSubmit={handleSubmit}>  {/*  onSubmit   */}
          <label>Title:</label>
          <input
            type="text"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
   
          <label>Description:</label>
          <textarea
            type="text"
            name="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
          />
   
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
   
  export default CreateProjectPage;