import React from "react"
import { ProjectControlls } from "./ProjectControlls"
import { TaskItem } from "../task/TaskItem"
import { Modal } from "../modal/Modal"
import { TaskForm } from "../modal/TaskForm"
import { useRenderModal } from "../../hooks/useRenderModal"
import { TaskItems } from "../task/TaskItems"
import "./Content.css"

const ProjectView = ({ project, removeProject, addTask, editTask, removeTask, taskSorting }) => {
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

    if (!project) {
        return null;
    }

    return (
        <>
            <div className="project-view">
                <div className="project-view-header">
                    <h2 className="project-view-title">{project.name}</h2>
                    <ProjectControlls
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
                    {
                        <TaskItems
                            project={project}
                            editTask={editTask}
                            removeTask={removeTask}
                        />
                    }
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

/*
    <>
            <div className="project-view">
                <div className="project-view-header">
                    <h2 className="project-view-title">{project.name}</h2>
                    <ProjectControlls
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
                    {
                        project.tasks.map((task) =>
                            <TaskItem
                                key={task.id}
                                name={task.name}
                                description={task.description}
                                dueDate={task.dueDate}
                                priority={task.priority}
                                isComplete={task.isComplete}
                                editTask={(...args) => editTask(project.id, task.id, ...args)}
                                removeTask={() => removeTask(project.id, task.id)}
                            />
                        )
                    }
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

*/
