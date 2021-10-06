import React, { useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProjectControlls } from "./ProjectControlls"
import { Modal } from "../modal/Modal"
import { TaskForm } from "../forms/TaskForm"
import { useRenderModal } from "../../hooks/useRenderModal"
import { TaskItems } from "../task/TaskItems"
import "./Content.css"

const ProjectView = ({ projects, moveTask, removeProject, addTask, editTask, removeTask, taskSorting }) => {
    const { projectId } = useParams();
    const project = projects.find((project) => project.id === projectId);
    
    const {
        sortTasksAfterInsertion,
        sortTasksAfterName,
        sortTasksAfterDate,
        sortTasksAfterPriority,
        sortTasksAfterComplete } = taskSorting;

    const {
        shouldRenderModal,
        renderModal,
        closeModal } = useRenderModal();

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    if (!project) {
        return null;
    }

    return (
        <>
            <div className="project-view">
                <div className="project-view-header">
                    <h2 className="project-view-title">{project.name}</h2>
                    <ProjectControlls
                        projectName={project.name}
                        renderNewTask={renderModal}
                        removeProject={() => removeProject(project.id)}
                        sortTasksAfterInsertion={() => sortTasksAfterInsertion(project.id)}
                        sortTasksAfterName={() => sortTasksAfterName(project.id)}
                        sortTasksAfterDate={() => sortTasksAfterDate(project.id)}
                        sortTasksAfterPriority={() => sortTasksAfterPriority(project.id)}
                        sortTasksAfterComplete={() => sortTasksAfterComplete(project.id)}
                    />
                </div>
                <div className="project-view-body">
                    <TaskItems
                        project={project}
                        editTask={editTask}
                        removeTask={removeTask}
                        projects={projects}
                        moveTask={moveTask}
                    />
                </div>
            </div>
            <Modal title="New Task" render={shouldRenderModal} close={closeModal} >
                <TaskForm
                    handleInSubmit={(...args) => {
                        addTask(project.id, ...args);
                        closeModal();
                    }}
                    handleInCancel={closeModal}
                />
            </Modal>
        </>
    )
}

export { ProjectView }
