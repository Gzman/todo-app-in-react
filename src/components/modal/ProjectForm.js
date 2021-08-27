import React from "react"
import "./ProjectForm.css"

const ProjectForm = ({ }) => {
    return (
        <form id="project-form">
            <div className="project-form-input">
                <label htmlFor="project-form-name">Name</label>
                <input
                    type="text"
                    id="project-form-name"
                    maxLength="50"
                />
            </div>
            <div className="project-form-actions">
                <button type="submit" className="project-form-ok-btn">Add</button>
                <button className="project-form-cancel-btn">Cancel</button>
            </div>
        </form>
    )
}

export { ProjectForm }