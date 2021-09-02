import React, { useState } from "react"
import { FiEdit } from "react-icons/fi"
import "./ProjectItem.css"

const ProjectItem = ({ name, taskCount, active, isCompleted, setAsSelected, editProject }) => {
    const [isEditAble, setIsEditAble] = useState(false);
    return (
        <div
            className={`project-item ${active && "active"} ${isCompleted && "completed"}`}
            onClick={setAsSelected}
        >
            {
                isEditAble
                    ? <input
                        className="project-item-name-input"
                        type="text"
                        onKeyPress={(e) => (e.key === "Enter") && setIsEditAble(false)}
                        onBlur={() => setIsEditAble(false)}
                        value={name}
                        onChange={(e) => editProject(e.target.value)}
                    />
                    : <p
                        className="project-item-name"
                        onDoubleClick={() => setIsEditAble(true)}>
                        {name}
                    </p>
            }
            {taskCount !== null && (taskCount > 0) && <p className="project-item-task-counter">{taskCount}</p>}
        </div>
    )
}

export { ProjectItem }