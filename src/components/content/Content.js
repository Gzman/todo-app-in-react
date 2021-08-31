
import React, { useEffect } from "react"
import { ProjectView } from "./ProjectView"
import { FilterView } from "./FilterView"
import "./Content.css"

const Content = ({ renderProjectView, setRenderProjectView, projects, selectedProjectId, selectProject, removeProject, addTask, editTask, removeTask, taskSorting, filtered }) => {

    useEffect(() => {
        setRenderProjectView(false);
    }, [filtered]);

    useEffect(() => {
        setRenderProjectView(true)
    }, [selectedProjectId]);

    return (
        <div className="content">
            {
                renderProjectView
                    ? (
                        <ProjectView
                            project={projects.find((project) => project.id === selectedProjectId)}
                            removeProject={removeProject}
                            addTask={addTask}
                            editTask={editTask}
                            removeTask={removeTask}
                            taskSorting={taskSorting}
                        />
                    )
                    : (
                        <FilterView
                            filtered={filtered}
                            selectProject={selectProject}
                            editTask={editTask}
                            removeTask={removeTask}
                        />
                    )
            }
        </div>
    )
}

export { Content }