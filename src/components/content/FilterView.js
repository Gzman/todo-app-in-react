import React from "react"
import { useParams, useLocation } from "react-router"
import { ProjectItem } from "../project/ProjectItem"
import { TaskItems } from "../task/TaskItems"
import { filterMapping } from "../../buisnesslogic/filterTasks"
import { FILTER } from "../../constants/filter"

const useQuery = () => {
    return new URLSearchParams(useLocation().search);
}

const FilterView = ({ projects, editTask, removeTask, moveTask }) => {
    const { filterKey } = useParams();
    const filter = filterMapping[filterKey];
    const filterArg = useQuery().get(FILTER[filterKey.toUpperCase()].queryParam) || "";
    return (
        <div className="filter-view">
            <div className="filter-view-header">
                <h2 className="filter-view-title">{`${FILTER[filterKey.toUpperCase()].title} ${filterArg}`}</h2>
            </div>
            <div className="filter-view-body">
                {
                    filter && filter(projects, filterArg).map((project) =>
                        project.tasks.length > 0
                        && <div className="filter-item" key={`${project.filterId}${project.id}`}>
                            <ProjectItem
                                key={project.filterId}
                                id={project.id}
                                name={project.name}
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