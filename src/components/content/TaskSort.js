import React from "react"
import { taskSorting } from "../../buisnesslogic/sortTasks"

const TaskSort = ({ setSortKey }) => {
    return (
        <select
            className="task-sort-select"
            onChange={(e) => setSortKey(e.target.value) }
        >
            {
                Object.keys(taskSorting).map((option) =>
                    <option key={option}>{option}</option>
                )
            }
        </select>
    )
}

export { TaskSort }