import React from "react"
import { ProjectFilter } from "./ProjectFilter"
import { CompleteProjectList } from "./CompleteProjectList"
import { ProjectList } from "./ProjectList"
import { ColapseWrapper } from "../ui/ColapseWrapper"
import { useCurrentViewPort } from "../../hooks/useCurrentViewPort"
import "./SideBar.css"

const SideBar = ({ projects, selectedProjectId, selectProject, addProject, editProject, timeTaskFilter, hideProjectMenu }) => {
    const viewPort = useCurrentViewPort();
    const sideBar = <div className="sidebar">
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
    </div>;

    return (
        viewPort.vw > 830
            ? sideBar
            : <ColapseWrapper
                classes="project-menu-btn"
                title="Projects"
                collect={hideProjectMenu}
            >
                {sideBar}
            </ColapseWrapper>
    )
}

export { SideBar }

// {...((!colapse) && { setColapsed: false })}