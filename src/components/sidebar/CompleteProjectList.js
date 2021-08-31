import React from "react"
import { ProjectItem } from "../project/ProjectItem"
import { ColapseWrapper } from "../ui/ColapseWrapper"
import "./SideBar.css"

const getCompleteProjects = (projects) => {
    return projects.filter((project) =>
        project.id !== "inbox"
        && project.tasks.length > 0
        && project.tasks.every((task) => task.isComplete));
}

const CompleteProjectList = ({ projects, selectedProjectId, selectProject }) => {
    const completeProjects = getCompleteProjects(projects);
    if (completeProjects?.length === 0) {
        return null;
    }
    return (
        <ColapseWrapper classes="complete-project-list" title="Completed">
            {
                completeProjects
                    ?.map((project) =>
                        <ProjectItem
                            key={project.id}
                            name={project.name}
                            setAsSelected={() => selectProject(project.id)}
                            active={project.id === selectedProjectId}
                        />
                    )
            }
        </ColapseWrapper>
    )
}

export { CompleteProjectList }