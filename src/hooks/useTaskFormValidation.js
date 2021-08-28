import { useEffect, useState, useRef } from "react";

const useTaskFormValidation = (name, dueDate) => {
    const [errors, setErrors] = useState({
        nameNotSet: "",
        dateSetInPast: "",
    });

    const isMount = useRef(true);
    const onlyOnUpdate = (callback) => {
        if (isMount.current) {
            isMount.current = false;
        } else {
            callback();
        }
    }

    useEffect(() => {
        onlyOnUpdate(validate);
    }, [name, dueDate]);

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
        validate,
    }
}

export { useTaskFormValidation }