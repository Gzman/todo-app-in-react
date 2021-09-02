import React, { useState } from "react"
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io"
import "./ColapseWrapper.css"

const ColapseWrapper = ({ classes, title, children, setColapsed = false }) => {
    const [isColapsed, setIsColapsed] = useState(setColapsed);
    return (
        <div className={`${classes} colapse-wrapper`}>
            <div
                className="colapse-wrapper-header"
                onClick={() => setIsColapsed(isColapsed => !isColapsed)}
            >
                <h4 className="colapse-wrapper-title">{title}</h4>
                {
                    isColapsed
                        ? <IoIosArrowUp className="colapse-wrapper-icon" />
                        : <IoIosArrowDown className="colapse-wrapper-icon" />
                }
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