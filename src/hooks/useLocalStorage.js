import { useEffect, useRef } from "react"

const useLocalStorage = (key, data, initialData) => {
    const isMount = useRef(true);
    const onlyOnUpdate = (callback) => {
        if (isMount.current) {
            isMount.current = false;
        } else {
            callback();
        }
    }

    useEffect(() => {
        onlyOnUpdate(() => localStorage.setItem(key, JSON.stringify(data)))
    }, [key, data]);

    const load = () => {
        try {
            const saved = JSON.parse(localStorage.getItem(key));
            return saved;
        } catch (err) {
            console.log(err);
            return initialData;
        }
    }

    return {
        load,
    }
}

export { useLocalStorage }