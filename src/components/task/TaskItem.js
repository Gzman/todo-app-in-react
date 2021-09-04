import React, { useState } from "react"
import { format } from "date-fns"
import { Modal } from "../modal/Modal"
import { RemoveModal} from "../modal/RemoveModal"
import { TaskForm } from "../forms/TaskForm"
import { MoveTaskForm } from "../forms/MoveTaskForm"
import { useRenderModal } from "../../hooks/useRenderModal"
import { useCurrentViewPort } from "../../hooks/useCurrentViewPort"
import { FiEdit, FiDelete } from "react-icons/fi"
import { HiOutlineSwitchHorizontal } from "react-icons/hi"
import "./TaskItem.css"

const TaskItem = ({ name, description, dueDate, priority, isComplete, editTask, removeTask, moveTask, projectId, projectList }) => {
    const [renderDetailView, setRenderDetailView] = useState(false);
    const { vw: viewPortWidth } = useCurrentViewPort();

    const {
        shouldRenderModal: shouldRenderEditModal,
        renderModal: renderEditModal,
        closeModal: closeEditModal
    } = useRenderModal();

    const {
        shouldRenderModal: shouldRenderRemoveModal,
        renderModal: renderRemoveModal,
        closeModal: closeRemoveModal
    } = useRenderModal();

    const {
        shouldRenderModal: shouldRenderMoveModal,
        renderModal: renderMoveModal,
        closeModal: closeMoveModal
    } = useRenderModal();

    const Actions = (
        <div className="task-item-actions">
            <FiEdit className="task-item-edit-btn" onClick={renderEditModal} />
            <FiDelete className="task-item-remove-btn" onClick={renderRemoveModal} />
            <HiOutlineSwitchHorizontal className="task-item-move-btn" onClick={renderMoveModal} />
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
            <Modal title="Edit Task" render={shouldRenderEditModal} close={closeEditModal}>
                <TaskForm
                    handleInSubmit={
                        (...args) => {
                            editTask(...args)
                            closeEditModal();
                        }
                    }
                    handleInCancel={closeEditModal}
                    taskToEdit={{ name, description, dueDate, priority, }}
                />
            </Modal>
            <RemoveModal
                itemName={name}
                remove={removeTask}
                shouldRenderModal={shouldRenderRemoveModal}
                closeModal={closeRemoveModal}
            />
            <Modal title={`Move ${name}`} render={shouldRenderMoveModal} close={closeMoveModal}>
                <MoveTaskForm
                    handleInSubmit={(destinationId) => {
                        moveTask(destinationId);
                        closeMoveModal();
                    }}
                    handleInCancel={closeMoveModal}
                    projects={projectList}
                    currentProjectId={projectId}
                />
            </Modal>
        </>
    )
}

export { TaskItem }