import React from "react"
import { TaskSort } from "./TaskSort"
import "./Content.css"

const ProjectControlls = ({
    renderNewTask,
    removeProject,
    sortTasksAfterInsertion,
    sortTasksAfterName,
    sortTasksAfterDate,
    sortTasksAfterPriority,
    sortTasksAfterComplete,
}) => {
    return (
        <div className="project-controlls">
            <button className="new-task-btn" onClick={renderNewTask}>
                New Task
            </button>
            <button className="remove-project-btn" onClick={removeProject}>
                Remove Project
            </button>
            <TaskSort
                sortAfterInsertion={sortTasksAfterInsertion}
                sortAfterName={sortTasksAfterName}
                sortAfterDate={sortTasksAfterDate}
                sortAfterPriority={sortTasksAfterPriority}
                sortAfterCompleted={sortTasksAfterComplete}
            />
        </div>
    )
}

export { ProjectControlls }