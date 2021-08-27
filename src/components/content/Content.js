import React from "react"
import { ProjectView } from "./ProjectView"
import { FilterView } from "./FilterView"
import "./Content.css"

const Content = ({ }) => {
    return (
        <div className="content">
            <ProjectView />
        </div>
    )
}

export { Content }