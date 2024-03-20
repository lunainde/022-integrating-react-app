// src/components/TaskCard.jsx

// We are deconstructing the props object directly in the parentheses of the function
function TaskCard({ title, description }) {

    return (
    <li className="TaskCard card" key={task.id}>
        <h3>{title}</h3>
        <h4>Description:</h4>
        <p>{description}</p>
    </li>
    );

}
export default TaskCard;