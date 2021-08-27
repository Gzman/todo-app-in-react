import React from "react"
import "./ProjectItem.css"

const ProjectItem = ({ name, taskCount }) => {
    return (
        <div className="project-item">
            <p className="project-item-name">{name}</p>
            {taskCount && <p className="project-item-task-counter">{taskCount}</p>}
        </div>
    )
}

export { ProjectItem }