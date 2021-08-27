import React from "react"
import "./Modal.css"

const Modal = ({ title, children, render, close }) => {
    if (!render) {
        return null;
    }
    const handleClose = (e) => {
        if (e.target === e.currentTarget) {
            close();
        }
    }
    return (
        <div className="backdrop" onClick={handleClose}>
            <div className="modal">
                <div className="modal-header">
                    <h3>{title}</h3>
                    <h3 className="modal-close" onClick={handleClose}>X</h3>
                </div>
                <div className="modal-body">
                    {children}
                </div>
            </div>
        </div>
    )
}

export { Modal }