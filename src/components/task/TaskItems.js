import React, { useState } from "react"
import { TaskForm } from "../modal/TaskForm"
import { Modal } from "../modal/Modal"
import { TaskItem } from "../task/TaskItem"

const TaskItems = ({ project, editTask, removeTask }) => {
    const [currentTaskId, setCurrentTaskId] = useState("");
    const [renderModal, setRenderModal] = useState(false);
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
        </>
    )
}

export { TaskItems }