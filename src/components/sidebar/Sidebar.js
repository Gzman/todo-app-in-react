import React from "react"
import { ProjectFilter } from "./ProjectFilter"
import { CompleteProjectList } from "./CompleteProjectList"
import { ProjectList } from "./ProjectList"
import { ColapseWrapper } from "../ui/ColapseWrapper"
import { useCurrentViewPortContext, tabletVw } from "../../context/currentViewPortContext"
import "./SideBar.css"

const SideBar = ({ projects, selectedProjectId, selectProject, addProject, editProject, timeTaskFilter, hideProjectMenu, closeProjectMenu }) => {
    const viewPort = useCurrentViewPortContext();
    const sideBar = (
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
                closeProjectMenu={closeProjectMenu}
            />
        </div>
    );

    return (
        viewPort.vw > tabletVw
            ? sideBar
            : <ColapseWrapper
                classes="project-menu-btn"
                title="Projects"
                close={hideProjectMenu}
            >
                {sideBar}
            </ColapseWrapper>
    )
}

export { SideBar }