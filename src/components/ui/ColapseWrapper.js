import React from "react"
import "./ColapseWrapper.css"

const ColapseWrapper = ({ classes, title, children }) => {
    return (
        <div className={`${classes} colapse-wrapper`}>
            <div className="colapse-wrapper-header">
                <h3>{title}</h3>
            </div>
            <div className="colapse-wrapper-body">
                {children}
            </div>
        </div>
    )
}

export { ColapseWrapper }