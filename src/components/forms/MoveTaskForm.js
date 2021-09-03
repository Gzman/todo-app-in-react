import { useState } from "react";
import "./MoveTaskForm.css"

const MoveTaskForm = ({ handleInSubmit, handleInCancel, currentProjectId ,projects }) => {
    const [destinationProjectId, setDestinationProjectId] = useState(currentProjectId);

    const submit = (e) => {
        e.preventDefault();
        destinationProjectId && handleInSubmit(destinationProjectId);
    }

    const cancel = () => {
        handleInCancel();
    }

    return (
        <form id="move-task-form">
            <div className="task-form-input">
                <label htmlFor="task-form-project-select">
                    Move to
                </label>
                <select
                    id="task-form-project-select"
                    value={destinationProjectId}
                    onChange={(e) => setDestinationProjectId(e.target.value)}
                >
                    {
                        projects?.map((project) =>
                            <option
                                key={project.id}
                                value={project.id} >
                                {project.name}
                            </option>
                        )
                    }
                </select>
            </div>
            <div className="task-form-actions">
                <button
                    type="submit"
                    className="task-form-ok-btn ok-btn"
                    onClick={submit}
                >Move</button>
                <button
                    className="task-form-cancel-btn"
                    onClick={cancel}
                >Cancel</button>
            </div>
        </form>
    )
}

export { MoveTaskForm }