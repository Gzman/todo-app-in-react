import { useState } from "react";

const useProjectFormValidation = (name) => {
    const initialErrorState = {
        nameNotSet: "",
    };
    const [errors, setErrors] = useState(initialErrorState);

    const resetErrors = () => {
        setErrors(initialErrorState);
    }

    const validate = () => {
        let nameNotSet = "";
        if (name === "") {
            nameNotSet = "A name must be entered";
        }
        setErrors({
            nameNotSet,
        });
        return nameNotSet === "";
    }

    return {
        errors,
        resetErrors,
        validate,
    }
}

export { useProjectFormValidation }