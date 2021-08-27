import { useState } from "react";

const useTaskFormValidation = (name, dueDate) => {
    const initialErrorState = {
        nameNotSet: "",
        dateSetInPast: "",
    }
    const [errors, setErrors] = useState(initialErrorState);

    const resetErrors = () => {
        setErrors(initialErrorState);
    }

    const validate = () => {
        let nameNotSet = "";
        let dateSetInPast = "";
        if (name === "") {
            nameNotSet = "Name must be entered";
        }
        if (dueDate !== "") {
            const today = new Date();
            today.setHours(0);
            if (new Date(dueDate) < today) {
                dateSetInPast = "Due date can't be set in the past";
            }
        }
        setErrors({
            nameNotSet,
            dateSetInPast,
        });
        return !nameNotSet && !dateSetInPast;
    }

    return {
        errors,
        resetErrors,
        validate,
    }
}

export { useTaskFormValidation }