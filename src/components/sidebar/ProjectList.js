import React from "react"
import { Modal } from "../modal/Modal"
import { ProjectForm } from "../modal/ProjectForm"
import { ProjectItem } from "../project/ProjectItem"
import { ColapseWrapper } from "../ui/ColapseWrapper"
import { useRenderModal } from "../../hooks/useRenderModal"
import "./SideBar.css"

const ProjectList = ({ projects, selectedProjectId, selectProject, addProject }) => {
    const { shouldRenderModal, renderModal, closeModal } = useRenderModal();
    return (
        <>
            <ColapseWrapper classes="project-list" title="Projects" setColapsed={true}>
                {
                    projects?.map((project) =>
                        (project.id !== "inbox")
                        && < ProjectItem
                            key={project.id}
                            name={project.name}
                            setAsSelected={() => selectProject(project.id)}
                            active={project.id === selectedProjectId}
                        />
                    )
                }
                <button className="project-add-btn" onClick={renderModal}>
                    Add Project
                </button>
            </ColapseWrapper>

            <Modal title="New Project" render={shouldRenderModal} close={closeModal}>
                <ProjectForm
                    handleInSubmit={(...args) => {
                        addProject(...args);
                        closeModal();
                    }}
                    handleInCancel={closeModal}
                />
            </Modal>
        </>
    )
}

export { ProjectList }