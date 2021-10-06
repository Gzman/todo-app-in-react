import React from "react"
import { Route, Switch, Redirect } from "react-router-dom"
import { ProjectView } from "./ProjectView"
import { FilterView } from "./FilterView"
import { ROUTES } from "../../constants/routes"
import { FILTER } from "../../constants/filter"
import "./Content.css"

const Content = ({ projects, removeProject, addTask, editTask, removeTask, moveTask }) => {
    return (
        <div className="content">
            <Switch>
                <Route exact path="/" >
                    <Redirect to={`/${ROUTES.PROJECTS}/inbox`} />
                </Route>
                <Route exact path="/projects/" >
                    <Redirect to={`/${ROUTES.FILTER}/${FILTER.ALL.key}`} />
                </Route>
                <Route path={`/${ROUTES.PROJECTS}/:projectId`}>
                    <ProjectView
                        projects={projects}
                        removeProject={removeProject}
                        addTask={addTask}
                        editTask={editTask}
                        removeTask={removeTask}
                        moveTask={moveTask}
                    />
                </Route>
                <Route path={`/${ROUTES.FILTER}/:filterKey`}>
                    <FilterView
                        projects={projects}
                        editTask={editTask}
                        removeTask={removeTask}
                        moveTask={moveTask}
                    />
                </Route>
            </Switch>
        </div>
    )
}

export { Content }