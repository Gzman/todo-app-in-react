const priorities = ["Low", "Medium", "High"];

const sortAfterName = (tasks) => {
    return [...tasks]?.sort((a, b) => a.name.localeCompare(b.name));
}

const sortAfterDueDate = (tasks) => {
    return [...tasks]?.sort((a, b) => {
        if (!a.dueDate) return -1;
        if (!b.dueDate) return 1;
        return a.dueDate - b.dueDate;
    });
}

const sortAfterPriority = (tasks) => {
    return [...tasks]?.sort((a, b) => {
        const aPriorityWeight = priorities.indexOf(a.priority);
        const bPriorityWeight = priorities.indexOf(b.priority);
        return aPriorityWeight - bPriorityWeight;
    });
}

const sortAfterCompleted = (tasks) => {
    return [...tasks]?.sort((a, b) => {
        if (a.isComplete) return 1;
        if (b.isComplete) return -1;
        return 0;
    });
}


export {
    sortAfterName,
    sortAfterDueDate,
    sortAfterPriority,
    sortAfterCompleted,
}