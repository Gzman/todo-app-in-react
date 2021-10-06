import React from "react"
import { ProjectFilter } from "./ProjectFilter"
import { CompleteProjectList } from "./CompleteProjectList"
import { ProjectList } from "./ProjectList"
import { ColapseWrapper } from "../ui/ColapseWrapper"
import { useCurrentViewPortContext, tabletVw } from "../../context/currentViewPortContext"
import { useProjectMenuContext } from "../../context/projectMenuContext"
import "./SideBar.css"

const SideBar = ({ projects, addProject, editProject }) => {
    const viewPort = useCurrentViewPortContext();
    const { isProjectMenuOpen, setIsProjectMenuOpen } = useProjectMenuContext();
    const sideBar = (
        <div className="sidebar">
            <ProjectFilter
                editProject={editProject}
            />
            <CompleteProjectList
                projects={projects}
                editProject={editProject}
            />
            <ProjectList
                projects={projects}
                addProject={addProject}
                editProject={editProject}
            />
        </div>
    );

    return (
        viewPort.vw > tabletVw
            ? sideBar
            : <ColapseWrapper
                classes="project-menu-btn"
                title="Projects"
                isColapsed={isProjectMenuOpen}
                setIsColapsed={() => setIsProjectMenuOpen(prev => !prev)}
            >
                {sideBar}
            </ColapseWrapper>
    )
}

export { SideBar }