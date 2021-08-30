import React from "react"
import { ProjectItem } from "../project/ProjectItem"
import "./SideBar.css"

const ProjectFilter = ({ selectedProjectId, setSelectedProjectId, timeTaskFilter }) => {
    const { filterTasksToday, filterTasksThisWeek, filterTasksThisMonth } = timeTaskFilter;
    return (
        <div className="project-filter">
            <ProjectItem
                name="Inbox"
                active={selectedProjectId === "inbox"}
                setAsSelected={() => setSelectedProjectId("inbox")}
            />
            <button className="project-filter-today" onClick={filterTasksToday}>
                Today
            </button>
            <button className="project-filter-week" onClick={filterTasksThisWeek}>
                Week
            </button>
            <button className="project-filter-month" onClick={filterTasksThisMonth}>
                Month
            </button>
        </div>
    )
}

export { ProjectFilter }