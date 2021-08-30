import { useState } from "react"
import uniqid from "uniqid"

const useProjects = () => {
    const [projects, setProjects] = useState([
        {
            id: "inbox",
            name: "Inbox",
            tasks: [
                {
                    id: "test",
                    name:"Test",
                    description: "A Test for edit",
                    dueDate: new Date("2021-07-11"),
                    priority: "Medium",
                    isComplete: true,
                    timestamp: Date.now(),
                },
            ],
        }
    ]);

    const addProject = (name) => {
        setProjects(projects =>
            [...projects, { id: uniqid(), name, tasks: [] }],
        );
    }

    const editProject = (id, name) => {
        setProjects(projects =>
            projects.map((project) => project.id === id
                ? { ...project, name }
                : project
            ),
        )
    }

    const removeProject = (id) => {
        if (id === "inbox") return;
        setProjects(projects => projects.filter((project) => project.id !== id));
    }

    const addTask = (projectId, name, description, dueDate, priority) => {
        setProjects(
            projects => projects.map((project) =>
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
            ),
        );
    }

    const editTask = (projectId, id, name, description, dueDate, priority, isComplete) => {
        setProjects(
            projects => projects.map((project) =>
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
            ),
        );
    }

    // const moveTask = (projectId, projectToId, id) => {
    //     projects => {
    //         const taskToMove = { ...projects.find((task) => task.id === id) };
    //         const removedProjects = projects.map((project) =>
    //             project.id === projectId
    //                 ? { ...project, tasks: project.task.filter((task) => task.id !== id) }
    //                 : project
    //         );
    //         return removedProjects.map((project) =>
    //             project.id === projectToId
    //                 ? { ...project, tasks: [...project.tasks, taskToMove] }
    //                 : project
    //         );
    //     }
    // }

    const removeTask = (projectId, id) => {
        setProjects(
            projects => projects.map((project) =>
                project.id === projectId
                    ? { ...project, tasks: project.tasks.filter((task) => task.id !== id) }
                    : project
            ),
        );
    }

    const sortTasksAfterInsertion = (projectId) => {
        setProjects(
            projects => projects.map((project) =>
                project.id === projectId
                ? {
                    ...project, tasks: [...project.tasks]
                    .sort((a, b) => a.timestamp - b.timestamp)
                }
                : project
            )
        )
    }

    const sortTasksAfterName = (projectId) => {
        setProjects(
            projects => projects.map((project) =>
                project.id === projectId
                    ? {
                        ...project, tasks: [...project.tasks]
                            .sort((a, b) => a.name.localeCompare(b.name))
                    }
                    : project
            )
        );
    }

    const sortTasksAfterDate = (projectId) => {
        setProjects(
            projects => projects.map((project) =>
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
            )
        )
    }

    const priorities = ["Low", "Medium", "High"];

    const sortTasksAfterPriority = (projectId) => {
        setProjects(
            projects => projects.map((project) =>
                project.id === projectId
                    ? {
                        ...project, tasks: [...project.tasks]
                            .sort((a, b) => {
                                const aPriorityWeight = priorities.indexOf(a.priority);
                                const bPriorityWeight = priorities.indexOf(b.priority);
                                return bPriorityWeight - aPriorityWeight;
                            })
                    }
                    : project
            )
        )
    }

    const sortTasksAfterComplete = (projectId) => {
        setProjects(
            projects => projects.map((project) =>
                project.id === projectId
                    ? {
                        ...project, tasks: [...project.tasks]
                            .sort((a, b) => {
                                if (a.isComplete) return -1;
                                if (b.isComplete) return 1;
                            })
                    }
                    : project
            )
        )
    }

    return {
        projects,
        addProject,
        editProject,
        removeProject,
        addTask,
        editTask,
        removeTask,
        sortTasksAfterInsertion,
        sortTasksAfterName,
        sortTasksAfterDate,
        sortTasksAfterPriority,
        sortTasksAfterComplete,
    }
}

export { useProjects }