import { useRef, useEffect, useState } from "react";

const useProjectFormValidation = (name) => {
    const [errors, setErrors] = useState({
        nameNotSet: "",
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
    }, [name]);

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
        validate,
    }
}

export { useProjectFormValidation }