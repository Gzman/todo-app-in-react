import React, { useState } from "react"
import { useHistory } from "react-router-dom"
import { Modal } from "../modal/Modal"
import { ProjectForm } from "../forms/ProjectForm"
import { ProjectItem } from "../project/ProjectItem"
import { ColapseWrapper } from "../ui/ColapseWrapper"
import { useRenderModal } from "../../hooks/useRenderModal"
import { isComplete } from "../../buisnesslogic/projects"
import { ROUTES } from "../../constants/routes"
import { useProjectMenuContext } from "../../context/projectMenuContext"
import "./SideBar.css"

const ProjectList = ({ projects, addProject, editProject }) => {
    const history = useHistory();
    const { shouldRenderModal, renderModal, closeModal } = useRenderModal();
    const { setIsProjectMenuOpen } = useProjectMenuContext();
    const [isColapsed, setIsColapsed] = useState(true);
    return (
        <>
            <ColapseWrapper
                classes="project-list"
                title="Projects"
                isColapsed={isColapsed}
                setIsColapsed={() => setIsColapsed(prev => !prev)}
            >
                {
                    projects?.map((project) =>
                        (project.id !== "inbox" && !isComplete(project))
                        && < ProjectItem
                            key={project.id}
                            id={project.id}
                            name={project.name}
                            taskCount={project.tasks.length}
                            editProject={(name) => editProject(project.id, name)}
                        />
                    )
                }
                <button className="project-add-btn" onClick={renderModal}>
                    Add Project
                </button>
            </ColapseWrapper>

            <Modal title="New Project" render={shouldRenderModal} close={closeModal}>
                <ProjectForm
                    handleInSubmit={(name) => {
                        const id = addProject(name);
                        closeModal();
                        history.replace(`/${ROUTES.PROJECTS}/${id}`);
                        setIsProjectMenuOpen(false);
                    }}
                    handleInCancel={closeModal}
                />
            </Modal>
        </>
    )
}

export { ProjectList }