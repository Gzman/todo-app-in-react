import React, { useState } from "react"
import { useTaskFormValidation } from "../../hooks/useTaskFormValidation"
import { format } from "date-fns"
import "./TaskForm.css"

const TaskForm = ({ handleInSubmit, handleInCancel, taskToEdit }) => {
    const [name, setName] = useState(taskToEdit ? taskToEdit.name : "");
    const [description, setDescription] = useState(taskToEdit ? taskToEdit.description : "");
    const [dueDate, setDueDate] = useState(taskToEdit?.dueDate ? format(taskToEdit.dueDate, "yyyy-MM-dd") : "");
    const [priority, setPriority] = useState(taskToEdit ? taskToEdit.priority : "Low");
    const { errors, validate } = useTaskFormValidation(name, dueDate, !taskToEdit);

    const cancel = (e) => {
        e.preventDefault();
        handleInCancel && handleInCancel();
    }

    const submit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            handleInSubmit && handleInSubmit(
                name,
                description,
                dueDate !== "" ? new Date(dueDate) : null,
                priority,
            );
        }
    }

    return (
        <form id="task-form">
            <div className="task-form-input">
                <label htmlFor="task-form-name">Name</label>
                {errors.nameNotSet && <p className="error">{errors.nameNotSet}</p>}
                <input
                    type="text"
                    id="task-form-name"
                    maxLength="50"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="task-form-input">
                <label htmlFor="task-form-description">Description</label>
                <textarea
                    type="text"
                    id="task-form-description"
                    maxLength="180"
                    rows="4"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
            </div>
            <div className="task-form-input">
                <label htmlFor="task-form-date">Due date</label>
                {errors.dateSetInPast && <p className="error">{errors.dateSetInPast}</p>}
                <input
                    type="date"
                    id="task-form-date"
                    value={dueDate}
                    onChange={(e) => setDueDate(e.target.value)}
                />
            </div>
            <div className="task-form-input">
                <label htmlFor="task-form-priority">Priority</label>
                <select
                    id="task-form-priority"
                    onChange={(e) => setPriority(e.target.value)}
                    value={priority}
                >
                    <option>Low</option>
                    <option>Medium</option>
                    <option>High</option>
                </select>
            </div>
            <div className="task-form-actions">
                <button
                    type="submit"
                    className="task-form-ok-btn"
                    onClick={submit}
                >{taskToEdit ? "Save" : "Create"}</button>
                <button
                    className="task-form-cancel-btn"
                    onClick={cancel}
                >Cancel</button>
            </div>
        </form>
    )
}

export { TaskForm }