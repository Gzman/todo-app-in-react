import React from "react"
import "./TaskItem.css"

const TaskItem = ({ name, description, dueDate, priority, isComplete }) => {
    return (
        <div className="task-item">
            <div className="task-item-normal-view">
                <input
                    type="checkbox"
                    className="task-item-complete"
                    checked={isComplete}
                />
                <p className="task-item-name">{name}</p>
                <p className="task-item-date">{dueDate}</p>
                <button className="task-item-edit-btn" >Edit</button>
                <button className="task-item-remove-btn">Remove</button>
            </div>
            <div className="task-item-detail-view">
                <p className="task-item-description">{description}</p>
            </div>
        </div>
    )
}

export { TaskItem }