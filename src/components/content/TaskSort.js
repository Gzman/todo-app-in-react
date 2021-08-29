import React from "react"

const TaskSort = ({ sortAfterInsertion, sortAfterName, sortAfterDate, sortAfterPriority, sortAfterCompleted }) => {
    const taskSorting = {
        "...": sortAfterInsertion,
        "Name": sortAfterName,
        "Date": sortAfterDate,
        "Priority": sortAfterPriority,
        "Completed": sortAfterCompleted,
    }
    return (
        <select
            className="task-sort-select"
            onChange={(e) => taskSorting[e.target.value]?.()}
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