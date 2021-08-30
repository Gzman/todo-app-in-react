import React from "react"
import { format } from "date-fns"
import { Modal } from "../modal/Modal"
import { useRenderModal } from "../../hooks/useRenderModal"
import { TaskForm } from "../modal/TaskForm"
import "./TaskItem.css"

const TaskItem = ({ name, description, dueDate, priority, isComplete, editTask, removeTask, renderEditTaskModal }) => {
    // const { shouldRenderModal, renderModal, closeModal } = useRenderModal();
    return (
        <>
            <div className="task-item">
                <div className="task-item-normal-view">
                    <input
                        type="checkbox"
                        className="task-item-complete"
                        checked={isComplete}
                        onChange={(e) => editTask(
                            name,
                            description,
                            dueDate,
                            priority,
                            e.target.checked,
                        )}
                    />
                    <p className="task-item-name">{name}</p>
                    <p className="task-item-date">{dueDate ? format(dueDate, "dd.MM.yyyy") : ""}</p>
                    <button className="task-item-edit-btn" onClick={renderEditTaskModal}>
                        Edit
                    </button>
                    <button className="task-item-remove-btn" onClick={removeTask}>
                        Remove
                    </button>
                </div>
                <div className="task-item-detail-view">
                    <p className="task-item-description">{description}</p>
                </div>
            </div>
        </>
    )
}

export { TaskItem }

/*
    <>
            <div className="task-item">
                <div className="task-item-normal-view">
                    <input
                        type="checkbox"
                        className="task-item-complete"
                        checked={isComplete}
                        onChange={(e) => editTask(
                            name,
                            description,
                            dueDate,
                            priority,
                            e.target.checked,
                        )}
                    />
                    <p className="task-item-name">{name}</p>
                    <p className="task-item-date">{dueDate ? format(dueDate, "dd.MM.yyyy") : ""}</p>
                    <button className="task-item-edit-btn" onClick={renderModal}>
                        Edit
                    </button>
                    <button className="task-item-remove-btn" onClick={removeTask}>
                        Remove
                    </button>
                </div>
                <div className="task-item-detail-view">
                    <p className="task-item-description">{description}</p>
                </div>
            </div>

            <Modal title="Edit Task" render={shouldRenderModal} close={closeModal}>
                <TaskForm
                    handleSubmit={(...args) => {
                        editTask(...args, isComplete);
                        closeModal();
                    }}
                    handleCancel={closeModal}
                    taskToEdit={{ name, description, dueDate, priority, }}
                />
            </Modal>
        </>

*/