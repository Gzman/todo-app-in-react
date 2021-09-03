import React from "react"
import { Logo } from "./Logo"
import { GlobalFilter } from "./GlobalFilter"
import "./Header.css"

const Header = ({ filterTasksByText, filterAllTasks, filterCriticalTasks, filterCompletedTasks, filterExpiredTasks }) => {
    return (
        <div className="header">
            <Logo />
            <GlobalFilter
                filterTasksByText={filterTasksByText}
                filterAllTasks={filterAllTasks}
                filterCriticalTasks={filterCriticalTasks}
                filterCompletedTasks={filterCompletedTasks}
                filterExpiredTasks={filterExpiredTasks}
            />
        </div>
    )
}

export { Header }