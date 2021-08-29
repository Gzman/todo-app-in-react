import React from "react"
import { ProjectFilter } from "./ProjectFilter"
import { CompleteProjectList } from "./CompleteProjectList"
import { ProjectList } from "./ProjectList"
import "./SideBar.css"

const SideBar = ({ projects, selectedProjectId, setSelectedProjectId, addProject }) => {
    return (
        <div className="sidebar">
            <ProjectFilter
                selectedProjectId={selectedProjectId}
                setSelectedProjectId={setSelectedProjectId}
            />
            <CompleteProjectList
                completedProjects={null}
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