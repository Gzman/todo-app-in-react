import React from "react"
import { ProjectFilter } from "./ProjectFilter"
import { CompleteProjectList } from "./CompleteProjectList"
import { ProjectList } from "./ProjectList"
import "./SideBar.css"

const SideBar = ({ projects, selectedProjectId, selectProject, addProject, editProject, timeTaskFilter }) => {
    return (
        <div className="sidebar">
            <ProjectFilter
                selectedProjectId={selectedProjectId}
                selectProject={selectProject}
                timeTaskFilter={timeTaskFilter}
            />
            <CompleteProjectList
                projects={projects}
                selectedProjectId={selectedProjectId}
                selectProject={selectProject}
            />
            <ProjectList
                projects={projects}
                selectedProjectId={selectedProjectId}
                selectProject={selectProject}
                addProject={addProject}
                editProject={editProject}
            />
        </div>
    )
}

export { SideBar }