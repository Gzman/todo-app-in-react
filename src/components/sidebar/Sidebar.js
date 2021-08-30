import React from "react"
import { ProjectFilter } from "./ProjectFilter"
import { CompleteProjectList } from "./CompleteProjectList"
import { ProjectList } from "./ProjectList"
import "./SideBar.css"

const SideBar = ({ projects, selectedProjectId, setSelectedProjectId, addProject }) => {
    const getCompleteProjects = () => {
        return projects.filter((project) => project.tasks.length > 0 && project.tasks.every((task) => task.isComplete));
    } 
    return (
        <div className="sidebar">
            <ProjectFilter
                selectedProjectId={selectedProjectId}
                setSelectedProjectId={setSelectedProjectId}
            />
            <CompleteProjectList
                completedProjects={getCompleteProjects()}
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