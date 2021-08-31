import React from "react"
import "./ProjectItem.css"

const ProjectItem = ({ name, taskCount, active, setAsSelected }) => {
    return (
        <div className={`project-item ${active && "active"}`}  onClick={setAsSelected}>
            <p className="project-item-name">{name}</p>
            {taskCount && <p className="project-item-task-counter">{taskCount}</p>}
        </div>
    )
}

export { ProjectItem }