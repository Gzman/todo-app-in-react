import { useEffect, useState } from "react"

const getCurrentViewPort = () => {
    return {
        vw: window.innerWidth,
        vh: window.innerHeight,
    }
}

const useCurrentViewPort = () => {
    const [viewPort, setViewPort] = useState(getCurrentViewPort());

    const saveCurrentViewPort = () => {
        setViewPort(getCurrentViewPort());
    }

    useEffect(() => {
        window.addEventListener("resize", saveCurrentViewPort);
        return () => window.removeEventListener("resize", saveCurrentViewPort);
    }, []);

    return viewPort;
}

export { useCurrentViewPort }