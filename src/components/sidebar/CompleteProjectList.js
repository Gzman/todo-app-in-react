import React from "react"
import { ProjectItem } from "../project/ProjectItem"
import { ColapseWrapper } from "../ui/ColapseWrapper"
import "./SideBar.css"

const CompleteProjectList = ({ completedProjects, selectedProjectId, setSelectedProjectId }) => {
    return (
        <ColapseWrapper classes="complete-project-list" title="Complete">
            {
                completedProjects?.length === 0
                    ? <div className="completed-project-list-msg">There are no completed projects</div>
                    : completedProjects
                        ?.map((project) =>
                            <ProjectItem 
                            key={project.id} 
                            name={project.name} 
                            setAsSelected={() => setSelectedProjectId(project.id)}
                            active={project.id === selectedProjectId}
                            />
                        )
            }
        </ColapseWrapper>
    )
}

export { CompleteProjectList }