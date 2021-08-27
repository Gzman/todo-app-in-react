import React, { useState } from "react"
import "./ColapseWrapper.css"

const ColapseWrapper = ({ classes, title, children, setColapsed = false }) => {
    const [isColapsed, setIsColapsed] = useState(setColapsed);
    return (
        <div className={`${classes} colapse-wrapper`}>
            <div
                className="colapse-wrapper-header"
                onClick={() => setIsColapsed(isColapsed => !isColapsed)}
            >
                <h3>{title}</h3>
            </div>
            {
                isColapsed &&
                <div className="colapse-wrapper-body">
                    {children}
                </div>
            }
        </div>
    )
}

export { ColapseWrapper }