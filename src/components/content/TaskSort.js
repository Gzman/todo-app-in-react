import React from "react"

const TaskSort = ({ }) => {
    return (
        <select className="task-sort-select">
            <option>...</option>
            <option>Name</option>
            <option>Date</option>
            <option>Priority</option>
            <option>Completed</option>
        </select>
    )
}

export { TaskSort }