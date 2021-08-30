import React from "react"
import { Logo } from "./Logo"
import { GlobalFilter } from "./GlobalFilter"
import "./Header.css"

const Header = ({ filterTasksByText, filterAllTasks, filterCriticalTasks, filterCompletedTasks }) => {
    return (
        <div className="header">
            <Logo />
            <GlobalFilter
                filterTasksByText={filterTasksByText}
                filterAllTasks={filterAllTasks}
                filterCriticalTasks={filterCriticalTasks}
                filterCompletedTasks={filterCompletedTasks}
            />
        </div>
    )
}

export { Header }