import React, { useState } from "react"
import { NavLink } from "react-router-dom";
import { ROUTES } from "../../constants/routes"
import { useProjectMenuContext } from "../../context/projectMenuContext"
import "./ProjectItem.css"

const ProjectItem = ({ id, name, taskCount, isCompleted, editProject }) => {
    const [isEditAble, setIsEditAble] = useState(false);
    const { setIsProjectMenuOpen } = useProjectMenuContext();
    return (
        <NavLink
            className={`project-item ${isCompleted && "completed"} }`}
            to={`/${ROUTES.PROJECTS}/${id}`}
            onClick={() => setIsProjectMenuOpen(false)}
        >
            {
                isEditAble
                    ? <input
                        className="project-item-name-input"
                        type="text"
                        onKeyPress={(e) => (e.key === "Enter" || e.key === "Escape") && setIsEditAble(false)}
                        onBlur={() => setIsEditAble(false)}
                        value={name}
                        onChange={(e) => e.target.value && editProject(e.target.value)}
                    />
                    : <p
                        className="project-item-name"
                        onDoubleClick={() => setIsEditAble(true)}>
                        {name}
                    </p>
            }
            {taskCount !== null && (taskCount > 0) && <p className="project-item-task-counter">{taskCount}</p>}
        </NavLink>
    )
}

export { ProjectItem }