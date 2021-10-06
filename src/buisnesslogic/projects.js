import uniqid from "uniqid"

const add = (projects, id, name) => {
    return [...projects, { id, name, tasks: [] }];
}

const edit = (projects, id, name) => {
    return projects.map((project) => project.id === id
        ? { ...project, name }
        : project
    )
}

const remove = (projects, id) => {
    return projects.filter((project) => project.id !== id);
}

const addATask = (projects, projectId, name, description, dueDate, priority) => {
    return projects.map((project) =>
        project.id === projectId
            ? {
                ...project,
                tasks: [...project.tasks, {
                    id: uniqid(),
                    name,
                    description,
                    dueDate,
                    priority,
                    isComplete: false,
                    timestamp: Date.now(),
                }],
            }
            : project
    )
}

const editATask = (projects, projectId, id, name, description, dueDate, priority, isComplete) => {
    return projects.map((project) =>
        project.id === projectId
            ? {
                ...project,
                tasks: project.tasks.map((task) =>
                    task.id === id
                        ? { ...task, name, description, dueDate, priority, isComplete }
                        : task
                ),
            }
            : project
    )
}

const moveATask = (projects, projectId, destinationId, id) => {
    const taskToMove = {
        ...projects.find((project) => project.id === projectId)
            .tasks
            .find((task) => task.id === id)
    };
    return projects.map((project) =>
        project.id === projectId
            ? { ...project, tasks: project.tasks.filter((task) => task.id !== id) }
            : project
    ).map((project) =>
        project.id === destinationId
            ? {
                ...project,
                tasks: [...project.tasks, { ...taskToMove }]
            }
            : project
    )
}

const removeATask = (projects, projectId, id) => {
    return projects.map((project) =>
        project.id === projectId
            ? { ...project, tasks: project.tasks.filter((task) => task.id !== id) }
            : project
    )
}

const isComplete = (project) => project.tasks.length > 0 && project.tasks.every((task) => task.isComplete);

export {
    add,
    edit,
    remove,
    addATask,
    editATask,
    moveATask,
    removeATask,
    isComplete,
}