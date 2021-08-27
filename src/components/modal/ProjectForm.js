import React, { useState } from "react"
import { useProjectFormValidation } from "../../hooks/useProjectFormValidation"
import "./ProjectForm.css"

const ProjectForm = ({ handleInSubmit, handleInCancel }) => {
    const [name, setName] = useState("");
    const { errors, resetErrors, validate } = useProjectFormValidation(name);

    const reset = () => {
        setName("");
        resetErrors();
    }

    const cancel = (e) => {
        e.preventDefault();
        reset();
        handleInCancel && handleInCancel();
    }

    const submit = (e) => {
        e.preventDefault();
        const isValid = validate();
        if (isValid) {
            handleInSubmit && handleInSubmit(name);
            reset();
        }
    }
    return (
        <form id="project-form">
            <div className="project-form-input">
                <label htmlFor="project-form-name">Name</label>
                {errors.nameNotSet && <p className="error">{errors.nameNotSet}</p>}
                <input
                    type="text"
                    id="project-form-name"
                    maxLength="50"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
            </div>
            <div className="project-form-actions">
                <button type="submit" className="project-form-ok-btn" onClick={submit}>Add</button>
                <button className="project-form-cancel-btn" onClick={cancel}>Cancel</button>
            </div>
        </form>
    )
}

export { ProjectForm }