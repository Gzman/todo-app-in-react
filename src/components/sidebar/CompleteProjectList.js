import React from "react"
import { ProjectItem } from "../project/ProjectItem"
import { ColapseWrapper } from "../ui/ColapseWrapper"
import "./SideBar.css"

const CompleteProjectList = ({ completedProjects }) => {
    return (
        <ColapseWrapper classes="complete-project-list" title="Complete">
            {
                completedProjects?.length === 0
                    ? <div className="completed-project-list-msg">There are no completed projects</div>
                    : completedProjects
                        ?.map((project) =>
                            <ProjectItem name={project.name} />
                        )
            }
        </ColapseWrapper>
    )
}

export { CompleteProjectList }