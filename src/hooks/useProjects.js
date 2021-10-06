import { useEffect, useState } from "react"
import { useLocalStorage } from "./useLocalStorage"
import { add, edit, remove, addATask, editATask, moveATask, removeATask } from "../buisnesslogic/projects"
import { createExampleProjects } from "../buisnesslogic/createExampleProjects"
import uniqid from "uniqid"

const DEFAULT = [
    {
        id: "inbox",
        name: "Inbox",
        tasks: [
            {
                id: uniqid(),
                name: "Example Task",
                description: "Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. ",
                dueDate: new Date(),
                priority: "Low",
                isComplete: true,
            }
        ],
    }
];

const convert = (serialized) => {
    serialized?.forEach((project) => project.tasks
        .forEach((task) => {
            task.dueDate = task.dueDate ? new Date(task.dueDate) : null;
        })
    );
    return serialized;
}

const useProjects = () => {
    const [projects, setProjects] = useState([]);

    const { load } = useLocalStorage("projects", projects);

    useEffect(() => {
        const savedProjects = convert(load());
        setProjects(
            savedProjects
                ? savedProjects
                : [
                    ...DEFAULT,
                    ...createExampleProjects(),
                ]
        );
    }, []);

    const addProject = (name) => {
        const id = uniqid();
        setProjects(projects => add(projects, id, name));
        return id;
    }

    const editProject = (id, name) => {
        if (id === DEFAULT.id) return;
        setProjects(projects => edit(projects, id, name));
    }

    const removeProject = (id) => {
        if (id === DEFAULT.id) return;
        setProjects(projects => remove(projects, id));
    }

    const addTask = (projectId, name, description, dueDate, priority) => {
        setProjects(projects =>
            addATask(projects, projectId, name, description, dueDate, priority)
        );
    }

    const editTask = (projectId, id, name, description, dueDate, priority, isComplete) => {
        setProjects(projects =>
            editATask(projects, projectId, id, name, description, dueDate, priority, isComplete)
        );
    }

    const moveTask = (projectId, destinationId, id) => {
        setProjects(projects => moveATask(projects, projectId, destinationId, id));
    }

    const removeTask = (projectId, id) => {
        setProjects(projects => removeATask(projects, projectId, id));
    }

    return {
        projects,
        addProject,
        editProject,
        removeProject,
        addTask,
        editTask,
        removeTask,
        moveTask,
    }
}

export { useProjects }