import React from "react"
import { ProjectFilter } from "./ProjectFilter"
import { CompleteProjectList } from "./CompleteProjectList"
import { ProjectList } from "./ProjectList"
import "./SideBar.css"

const SideBar = ({ }) => {
    return (
        <div className="sidebar">
            <ProjectFilter />
            <CompleteProjectList />
            <ProjectList />
        </div>
    )
}

export { SideBar }