import React from "react"
import { ProjectControlls } from "./ProjectControlls"
import "./Content.css"
import { TaskItem } from "../task/TaskItem"

const ProjectView = ({ project }) => {
    return (
        <div className="project-view">
            <div className="project-view-header">
                <ProjectControlls />
            </div>
            <div className="project-view-body">
                {
                    project?.tasks.map((task) =>
                        <TaskItem
                            isComplete={task.isComplete}
                            name={task.name}
                            description={task.description}
                            dueDate={task.dueDate}
                            priority={task.priority}
                        />
                    )
                }
            </div>
        </div>
    )
}

export { ProjectView }