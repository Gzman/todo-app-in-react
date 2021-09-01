import React from "react"
import "./ProjectItem.css"

const ProjectItem = ({ name, taskCount, active, isCompleted, setAsSelected }) => {
    return (
        <div
            className={`project-item ${active && "active"} ${isCompleted && "completed"}`}
            onClick={setAsSelected}
        >
            <p className="project-item-name">{name}</p>
            {taskCount !== null && (taskCount >  0) && <p className="project-item-task-counter">{taskCount}</p>}
        </div>
    )
}

export { ProjectItem }