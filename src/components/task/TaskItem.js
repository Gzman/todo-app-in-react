import React, { useState } from "react"
import { format } from "date-fns"
import { RemoveModal } from "../modal/RemoveModal"
import { useRenderModal } from "../../hooks/useRenderModal"
import { useCurrentViewPort } from "../../hooks/useCurrentViewPort"
import { FiEdit, FiDelete } from "react-icons/fi"
import { HiOutlineSwitchHorizontal } from "react-icons/hi"
import "./TaskItem.css"

const TaskItem = ({ name, description, dueDate, priority, isComplete, editTask, removeTask, renderEditTaskModal, renderMoveTaskModal }) => {
    const { shouldRenderModal, renderModal, closeModal } = useRenderModal();
    const [renderDetailView, setRenderDetailView] = useState(false);
    const { vw: viewPortWidth } = useCurrentViewPort();
    const Actions = (
        <div className="task-item-actions">
            <FiEdit className="task-item-edit-btn" onClick={renderEditTaskModal} />
            <FiDelete className="task-item-remove-btn" onClick={renderModal} />
            <HiOutlineSwitchHorizontal className="task-item-move-btn" onClick={renderMoveTaskModal} />
        </div>
    );
    return (
        <>
            <div className={`task-item ${priority} ${isComplete && "completed"}`}>
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
                    <p className="task-item-name" onClick={() => setRenderDetailView(render => !render)}>{name}</p>
                    <p className="task-item-date">{dueDate ? format(dueDate, "dd.MM.yyyy") : ""}</p>
                    {viewPortWidth <= 411 ? renderDetailView && Actions : Actions}
                </div>
                {
                    renderDetailView && (description.length > 0)
                    && <div className="task-item-detail-view">
                        <p className="task-item-description">{description}</p>
                    </div>
                }
            </div>
            <RemoveModal
                itemName={name}
                remove={removeTask}
                shouldRenderModal={shouldRenderModal}
                closeModal={closeModal}
            />
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