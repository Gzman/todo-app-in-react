import React from "react"
import "./Header.css"

const GlobalFilter = ({ filterTasksByText, filterAllTasks, filterCriticalTasks, filterCompletedTasks }) => {
    return (
        <div className="global-filter">
            <input
                className="global-filter-text"
                type="text"
                placeholder="Search Tasks"
                onChange={(e) => filterTasksByText(e.target.value)}
            />
            <div className="global-filter-actions">
                <button className="global-filter-complete-btn" onClick={filterCompletedTasks}>
                    Complete
                </button>
                <button className="global-filter-critical-btn" onClick={filterCriticalTasks}>
                    Critical
                </button>
                <button className="global-filter-all-btn" onClick={filterAllTasks}>
                    All
                </button>
            </div>
        </div>
    )
}

export { GlobalFilter }