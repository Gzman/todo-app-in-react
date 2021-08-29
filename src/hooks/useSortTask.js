const priorities = ["Low", "Medium", "High"];

const useSortTasks = (tasks) => {

    const sortAfterInsertion = () => {
        return [...tasks].sort((a,b) => a.timestamp - b.timestamp);
    }

    const sortAfterName = () => {
        return [...tasks].sort((a, b) => a.name.localeCompare(b.name));
    }

    const sortAfterDueDate = () => {
        return [...tasks].sort((a, b) => {
            if (!a.dueDate) return -1;
            if (!b.dueDate) return 1;
            return b.dueDate - a.dueDate;
        });
    }

    const sortAfterPriority = () => {
        return [...tasks].sort((a, b) => {
            const aPriorityWeight = priorities.indexOf(a.priority);
            const bPriorityWeight = priorities.indexOf(b.priority);
            return aPriorityWeight - bPriorityWeight;
        });
    }

    const sortAfterCompleted = () => {
        return [...tasks].sort((a, b) => {
            if (a.isComplete) return 1;
            if (b.isComplete) return -1;
            return 0;
        });
    }

    return {
        sortAfterInsertion,
        sortAfterName,
        sortAfterDueDate,
        sortAfterPriority,
        sortAfterCompleted,
    }
}

export { useSortTasks }