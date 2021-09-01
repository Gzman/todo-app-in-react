import React from "react"
import { Route, Switch } from "react-router-dom"
import { ProjectView } from "./ProjectView"
import { FilterView } from "./FilterView"
import "./Content.css"

const Content = ({ projects, selectedProjectId, selectProject, removeProject, addTask, editTask, removeTask, taskSorting, filtered }) => {
    return (
        <div className="content">
            <Switch>
                <Route
                    exact path="/"
                    component={() =>
                        <ProjectView
                            project={projects
                                .find((project) => project.id === selectedProjectId)
                            }
                            removeProject={removeProject}
                            addTask={addTask}
                            editTask={editTask}
                            removeTask={removeTask}
                            taskSorting={taskSorting}
                        />
                    }
                />
                <Route
                    exact path="/filtered_results"
                    component={() =>
                        <FilterView
                            filtered={filtered}
                            selectProject={selectProject}
                            editTask={editTask}
                            removeTask={removeTask}
                        />
                    }
                />
            </Switch>
        </div>
    )
}

export { Content }