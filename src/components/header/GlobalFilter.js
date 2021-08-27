import React from "react"
import "./Header.css"

const GlobalFilter = ({}) => {
    return (
        <div className="global-filter">
            <input className="global-filter-text" type="text" />
            <div className="global-filter-actions">
                <button className="global-filter-complete-btn">Complete</button>
                <button className="global-filter-critical-btn">Critical</button>
                <button className="global-filter-all-btn">All</button>
            </div>
        </div>
    )
}

export { GlobalFilter }