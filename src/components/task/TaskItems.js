import React, { useState } from "react"
import { TaskForm } from "../forms/TaskForm"
import { MoveTaskForm } from "../forms/MoveTaskForm"
import { Modal } from "../modal/Modal"
import { TaskItem } from "../task/TaskItem"

const TaskItems = ({ project, projects, editTask, removeTask, moveTask }) => {
    const [currentTaskId, setCurrentTaskId] = useState("");
    const [renderModal, setRenderModal] = useState(false);
    const [renderMoveTaskModal, setRenderMoveTaskModal] = useState(false);
    const closeMoveTaskModal = () => setRenderMoveTaskModal(false);
    const getCurrentTask = () => {
        return project.tasks.find((task) => task.id === currentTaskId);
    }
    const close = () => {
        setRenderModal(false);
    }
    return (
        <>
            {
                project?.tasks.map((task) =>
                    <TaskItem
                        key={task.id}
                        name={task.name}
                        description={task.description}
                        dueDate={task.dueDate}
                        priority={task.priority}
                        isComplete={task.isComplete}
                        editTask={(...args) => editTask(project.id, task.id, ...args)}
                        removeTask={() => removeTask(project.id, task.id)}
                        renderEditTaskModal={() => {
                            setRenderModal(
                                render => {
                                    setCurrentTaskId(task.id);
                                    return true;
                                }
                            );
                        }}
                        renderMoveTaskModal={() => {
                            setCurrentTaskId(task.id);
                            setRenderMoveTaskModal(true)
                        }}
                    />
                )
            }
            <Modal title="Edit Task" render={renderModal} close={close}>
                <TaskForm
                    handleInSubmit={
                        (...args) => {
                            editTask(
                                project.id,
                                currentTaskId,
                                ...args,
                                getCurrentTask()?.isComplete);
                            close();
                        }
                    }
                    handleInCancel={close}
                    taskToEdit={
                        {
                            name: getCurrentTask()?.name,
                            description: getCurrentTask()?.description,
                            dueDate: getCurrentTask()?.dueDate,
                            priority: getCurrentTask()?.priority,
                        }
                    }
                />
            </Modal>
            <Modal title={`Move ${getCurrentTask()?.name}`} render={renderMoveTaskModal} close={closeMoveTaskModal}>
                <MoveTaskForm
                    handleInSubmit={(destinationId) => {
                        moveTask(project.id, destinationId, getCurrentTask()?.id);
                        closeMoveTaskModal();
                    }}
                    handleInCancel={closeMoveTaskModal}
                    projects={projects.map((project) => ({ id: project.id, name: project.name }))}
                    currentProjectId={project.id}
                />
            </Modal>
        </>
    )
}

export { TaskItems }