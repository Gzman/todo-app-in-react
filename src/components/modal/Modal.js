import React from "react"
import "./Modal.css"

const Modal = ({ title, children }) => {
    return (
        <div className="backdrop" >
            <div className="modal">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <h3 className="modal-close">X</h3>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export { Modal }