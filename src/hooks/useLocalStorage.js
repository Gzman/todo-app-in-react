import { useEffect, useRef } from "react"

const useLocalStorage = (key, data) => {
    const isMount = useRef(true);
    const onlyOnUpdate = (callback) => isMount.current ? isMount.current = false : callback();

    useEffect(() => {
        onlyOnUpdate(() => localStorage.setItem(key, JSON.stringify(data)))
    }, [key, data]);

    const load = () => {
        try {
            const saved = JSON.parse(localStorage.getItem(key));
            return saved;
        } catch (err) {
            console.log(err);
            return null;
        }
    }

    return { load }
}

export { useLocalStorage }