import { useState } from "react"

const useSelectedProjectId = () => {
    const [selectedProjectId, setSelectedProjectId] = useState("inbox");

    const selectProject = (id) => {
        setSelectedProjectId(id);
    }

    return {
        selectedProjectId,
        setSelectedProjectId,

    }
}

export { useSelectedProjectId }