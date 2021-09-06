import { useEffect } from "react";
import { useHistory } from "react-router-dom"

const useNavigateContent = () => {
    const history = useHistory();

    useEffect(() => {
        history.replace("/");
    }, [history]);

    const navigateTo = (path, callback) => {
        history.replace(path);
        callback && callback();
    }

    return { navigateTo }
}

export { useNavigateContent }