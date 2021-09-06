import { getPriorityWeight } from "./taskPriorities"

const sortAfterInsertion = (projects, projectId) => {
    return projects?.map((project) =>
        project.id === projectId
            ? {
                ...project, tasks: [...project.tasks]
                    .sort((a, b) => a.timestamp - b.timestamp)
            }
            : project
    );
}

const sortAfterName = (projects, projectId) => {
    return projects?.map((project) =>
        project.id === projectId
            ? {
                ...project, tasks: [...project.tasks]
                    .sort((a, b) => a.name.localeCompare(b.name))
            }
            : project
    );
}

const sortAfterDate = (projects, projectId) => {
    return projects?.map((project) =>
        project.id === projectId
            ? {
                ...project, tasks: [...project.tasks]
                    .sort((a, b) => {
                        if (!a.dueDate) return 1;
                        if (!b.dueDate) return -1;
                        return a.dueDate - b.dueDate;
                    })
            }
            : project
    );
}

const sortAfterPriority = (projects, projectId) => {
    return projects?.map((project) =>
        project.id === projectId
            ? {
                ...project, tasks: [...project.tasks]
                    .sort((a, b) => getPriorityWeight(b.priority) - getPriorityWeight(a.priority))
            }
            : project
    );
}

const sortAfterComplete = (projects, projectId) => {
    return projects?.map((project) =>
        project.id === projectId
            ? {
                ...project, tasks: [...project.tasks]
                    .sort((a, b) => {
                        if (a.isComplete) return -1;
                        if (b.isComplete) return 1;
                    })
            }
            : project
    );
}


export {
    sortAfterInsertion,
    sortAfterName,
    sortAfterDate,
    sortAfterPriority,
    sortAfterComplete,
}