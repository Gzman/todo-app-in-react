import React from "react"
import { TaskSort } from "./TaskSort"
import { RemoveModal } from "../modal/RemoveModal"
import { useRenderModal } from "../../hooks/useRenderModal"
import "./Content.css"

const ProjectControlls = ({
    projectName,
    renderNewTask,
    removeProject,
    sortTasksAfterInsertion,
    sortTasksAfterName,
    sortTasksAfterDate,
    sortTasksAfterPriority,
    sortTasksAfterComplete,
}) => {
    const { shouldRenderModal, renderModal, closeModal } = useRenderModal();
    return (
        <div className="project-controlls">
            <button className="new-task-btn" onClick={renderNewTask}>
                New Task
            </button>
            <button className="remove-project-btn" onClick={renderModal}>
                Remove Project
            </button>
            <TaskSort
                sortAfterInsertion={sortTasksAfterInsertion}
                sortAfterName={sortTasksAfterName}
                sortAfterDate={sortTasksAfterDate}
                sortAfterPriority={sortTasksAfterPriority}
                sortAfterCompleted={sortTasksAfterComplete}
            />
            <RemoveModal
                itemName={projectName}
                remove={removeProject}
                shouldRenderModal={shouldRenderModal}
                closeModal={closeModal}
            />
        </div>
    )
}

export { ProjectControlls }