import React from "react"
import { TaskSort } from "./TaskSort"
import "./Content.css"

const ProjectControlls = ({ }) => {
    return (
        <div className="project-controlls">
            <button className="new-task-btn" >New Task</button>
            <button className="remove-project-btn">Remove Project</button>
            <TaskSort />
        </div>
    )
}

export { ProjectControlls }