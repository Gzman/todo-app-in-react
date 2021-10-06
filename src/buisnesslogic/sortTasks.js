import { getPriorityWeight } from "./taskPriorities"

const taskSorting = {
    "...": (a, b) => a.timestamp - b.timestamp,
    "Name": (a, b) => a.name.localeCompare(b.name),
    "Date": (a, b) => {
        if (!a.dueDate) return 1;
        if (!b.dueDate) return -1;
        return a.dueDate - b.dueDate;
    },
    "Priority": (a, b) => getPriorityWeight(b.priority) - getPriorityWeight(a.priority),
    "Completed": (a, b) => {
        if (a.isComplete) return -1;
        if (b.isComplete) return 1;
    },
}

const DEFAULT_SORT = "...";

export { taskSorting, DEFAULT_SORT }