import React from "react"
import { ProjectItem } from "../project/ProjectItem"
import { TaskItems } from "../task/TaskItems"
import { filterMapping } from "../../buisnesslogic/filterTasks"

const FilterView = ({ filter, projects, selectProject, editTask, removeTask, moveTask }) => {
    return (
        <div className="filter-view">
            <div className="filter-view-header">
                <h2 className="filter-view-title">{filter.title}</h2>
            </div>
            <div className="filter-view-body">
                {
                    filterMapping[filter.key]?.(projects, filter.arg).map((project) =>
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
                                projects={projects}
                                editTask={editTask}
                                removeTask={removeTask}
                                moveTask={moveTask}
                            />
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export { FilterView }