import React from "react"
import { ProjectItem } from "../project/ProjectItem"
import { TaskItems } from "../task/TaskItems"

const FilterView = ({ filtered }) => {
    if (!filtered) {
        return null;
    }
    return (
        <div className="filter-view">
            <div className="filter-view-header">
                <h2>Filter View</h2>
            </div>
            <div className="filter-view-body">
                {
                    filtered?.map((project) =>
                        <div className="filter-item" key={`${project.filterId}${project.id}`}>
                            <ProjectItem
                                key={project.filterId}
                                name={project.name}
                            />
                            <TaskItems
                                key={`${project.id}${project.filterId}`}
                                project={project}
                                editTask={(...args) => console.log("FilterView", ...args)}
                                removeTask={(...args) => console.log("FilterView", ...args)}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export { FilterView }