import React from "react"
import { ProjectItem } from "../project/ProjectItem"
import { TaskItems } from "../task/TaskItems"

const FilterView = ({ filtered, selectProject, editTask, removeTask }) => {
    if (!filtered) {
        return null;
    }
    return (
        <div className="filter-view">
            <div className="filter-view-header">
                <h2>{filtered.filterName}</h2>
            </div>
            <div className="filter-view-body">
                {
                    filtered.projects?.map((project) =>
                        project.tasks.length > 0
                        && <div className="filter-item" key={`${project.filterId}${project.id}`}>
                            <ProjectItem
                                key={project.filterId}
                                name={project.name}
                                setAsSelected={() => selectProject(project.id)}
                            />
                            <TaskItems
                                key={`${project.id}${project.filterId}`}
                                project={project}
                                editTask={editTask}
                                removeTask={removeTask}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export { FilterView }