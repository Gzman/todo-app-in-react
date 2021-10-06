import React, { useState, useEffect } from "react"
import { useParams } from "react-router-dom"
import { ProjectControlls } from "./ProjectControlls"
import { Modal } from "../modal/Modal"
import { TaskForm } from "../forms/TaskForm"
import { useRenderModal } from "../../hooks/useRenderModal"
import { TaskItems } from "../task/TaskItems"
import { DEFAULT_SORT } from "../../buisnesslogic/sortTasks"
import "./Content.css"

const ProjectView = ({ projects, moveTask, removeProject, addTask, editTask, removeTask }) => {
    const { projectId } = useParams();
    const project = projects.find((project) => project.id === projectId);

    const [sortKey, setSortKey] = useState(DEFAULT_SORT);

    const { shouldRenderModal, renderModal, closeModal } = useRenderModal();

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
                        setSortKey={setSortKey}
                    />
                </div>
                <div className="project-view-body">
                    <TaskItems
                        project={project}
                        editTask={editTask}
                        removeTask={removeTask}
                        projects={projects}
                        moveTask={moveTask}
                        sortKey={sortKey}
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
