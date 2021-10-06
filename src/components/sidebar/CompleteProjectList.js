import { useState } from "react"
import { ProjectItem } from "../project/ProjectItem"
import { ColapseWrapper } from "../ui/ColapseWrapper"
import { isComplete } from "../../buisnesslogic/projects"
import "./SideBar.css"

const CompleteProjectList = ({ projects, editProject }) => {
    const [isColapsed, setIsColapsed] = useState(false);
    const completeProjects = projects
        .filter((project) => project.id !== "inbox" && isComplete(project));

    if (completeProjects?.length === 0) {
        return null;
    }
    
    return (
        <ColapseWrapper
            classes="complete-project-list"
            title="Completed"
            isColapsed={isColapsed}
            setIsColapsed={() => setIsColapsed(prev => !prev)}
        >
            {
                completeProjects
                    ?.map((project) =>
                        <ProjectItem
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            taskCount={project.tasks.length}
                            editProject={editProject}
                        />
                    )
            }
        </ColapseWrapper>
    )
}

export { CompleteProjectList }