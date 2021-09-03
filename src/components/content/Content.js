import React from "react"
import { Route, Switch } from "react-router-dom"
import { ProjectView } from "./ProjectView"
import { FilterView } from "./FilterView"
import "./Content.css"

const Content = ({ projects, selectedProjectId, selectProject, removeProject, addTask, editTask, removeTask, moveTask, taskSorting, filter }) => {
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
                            moveTask={moveTask}
                            taskSorting={taskSorting}
                            projects={projects}
                        />
                    }
                />
                <Route
                    exact path="/filtered_results"
                    component={() =>
                        <FilterView
                            filter={filter}
                            projects={projects}
                            selectProject={selectProject}
                            editTask={editTask}
                            removeTask={removeTask}
                            moveTask={moveTask}
                        />
                    }
                />
            </Switch>
        </div>
    )
}

export { Content }