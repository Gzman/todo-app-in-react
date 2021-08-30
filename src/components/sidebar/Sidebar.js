import React from "react"
import { ProjectFilter } from "./ProjectFilter"
import { CompleteProjectList } from "./CompleteProjectList"
import { ProjectList } from "./ProjectList"
import "./SideBar.css"

const SideBar = ({ projects, selectedProjectId, setSelectedProjectId, addProject, timeTaskFilter }) => {
    return (
        <div className="sidebar">
            <ProjectFilter
                selectedProjectId={selectedProjectId}
                setSelectedProjectId={setSelectedProjectId}
                timeTaskFilter={timeTaskFilter}
            />
            <CompleteProjectList
                projects={projects}
                selectedProjectId={selectedProjectId}
                setSelectedProjectId={setSelectedProjectId}
            />
            <ProjectList
                projects={projects}
                selectedProjectId={selectedProjectId}
                setSelectedProjectId={setSelectedProjectId}
                addProject={addProject}
            />
        </div>
    )
}

export { SideBar }