import React from "react"
import { ProjectItem } from "../project/ProjectItem"
import "./SideBar.css"

const ProjectFilter = ({ }) => {
    return (
        <div className="project-filter">
            <ProjectItem name="Inbox" />
            <button className="project-filter-today">Today</button>
            <button className="project-filter-week">Week</button>
            <button className="project-filter-month">Month</button>
        </div>
    )
}

export { ProjectFilter }