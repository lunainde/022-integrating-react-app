// src/components/ProjectCard.jsx
import { Link } from "react-router-dom";

// Deconstructing props object directly in the parentheses of the function
function ProjectCard ({ title, description, id }) {

    return (
        <div className="ProjectCard card">
            <Link to={`/projects/${id}`}>
                <h3>{title}</h3>
            </Link>
            <p style={{ maxWidth: "400px" }}>{description} </p>
        </div>
    )
}
export default ProjectCard;

{/* EXTRACTED << ProjectListPage to render the list of projects = mapping  */}
// {projects.map((project) => {
//     return (
//       <div className="ProjectCard card" key={project.id} >
//         <Link to={`/projects/${project.id}`}>
//           <h3>{project.title}</h3>
//         </Link>
//       </div>
//     );
// })}     