import { createContext, useContext, useEffect, useState } from "react";

const CurrentViewPortContext = createContext();

const useCurrentViewPortContext = () => useContext(CurrentViewPortContext);

const getCurrentViewPort = () => {
    return {
        vw: window.innerWidth,
        vh: window.innerHeight,
    }
}

export const tabletVw = 770;
export const smartphoneVw = 511;

const CurrentViewPortProvider = ({ children }) => {
    const [viewPort, setViewPort] = useState(getCurrentViewPort());

    const saveCurrentViewPort = () => setViewPort(getCurrentViewPort());

    useEffect(() => {
        window.addEventListener("resize", saveCurrentViewPort);
        return () => window.removeEventListener("resize", saveCurrentViewPort);
    }, []);

    return (
        <CurrentViewPortContext.Provider value={viewPort} >
            {children}
        </CurrentViewPortContext.Provider>
    )
}

export { CurrentViewPortContext, useCurrentViewPortContext, CurrentViewPortProvider }