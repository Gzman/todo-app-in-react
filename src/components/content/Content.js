import React from "react"
import { ProjectView } from "./ProjectView"
import { FilterView } from "./FilterView"
import "./Content.css"

const Content = ({ projects, selectedProjectId, removeProject, addTask, editTask, removeTask, taskSorting }) => {
    return (
        <div className="content">
            <ProjectView
                project={projects.find((project) => project.id === selectedProjectId)}
                removeProject={removeProject}
                addTask={addTask}
                editTask={editTask}
                removeTask={removeTask}
                taskSorting={taskSorting}
            />
        </div>
    )
}

export { Content }