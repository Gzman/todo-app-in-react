
import { useState, createContext, useContext } from "react";

const ProjectMenuContext = createContext();

const useProjectMenuContext = () => useContext(ProjectMenuContext);

const ProjectMenuContextProvider = ({ children }) => {
    const [isProjectMenuOpen, setIsProjectMenuOpen] = useState(false);

    return (
        <ProjectMenuContext.Provider value={{ isProjectMenuOpen, setIsProjectMenuOpen }}>
            {children}
        </ProjectMenuContext.Provider>
    )
}

export { ProjectMenuContext, ProjectMenuContextProvider, useProjectMenuContext }
