import React from "react"
import "./TaskForm.css"

const TaskForm = ({ }) => {
    return (
        <form id="task-form">
            <div className="task-form-input">
                <label htmlFor="task-form-name">Name</label>
                <input
                    type="text"
                    id="task-form-name"
                    maxLength="50"
                />
            </div>
            <div className="task-form-input">
                <label htmlFor="task-form-description">Description</label>
                <textarea
                    type="text"
                    id="task-form-description"
                    maxLength="180"
                />
            </div>
            <div className="task-form-input">
                <label htmlFor="task-form-date">Due date</label>
                <input
                    type="date"
                    id="task-form-date"
                />
            </div>
            <div className="task-form-input">
                <label htmlFor="task-form-priority">Priority</label>
                <select id="task-form-priority">
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>
            <div className="task-form-actions">
                <button type="submit" className="task-form-ok-btn">Add</button>
                <button className="task-form-cancel-btn">Cancel</button>
            </div>
        </form>
    )
}

export { TaskForm }