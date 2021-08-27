import React from "react"
import { ProjectItem } from "../project/ProjectItem"
import { ColapseWrapper } from "../ui/ColapseWrapper"
import "./SideBar.css"

const ProjectList = ({ projects }) => {
    return (
        <ColapseWrapper classes="project-list" title="Projects" setColapsed={true}>
            {
                projects?.map((project) =>
                    <ProjectItem
                        name={project.name}
                    />
                )
            }
            <button className="project-add-btn">Add Project</button>
        </ColapseWrapper>
    )
}

export { ProjectList }