import { getWeek, getMonth } from "date-fns"

const filterTasks = (projects, filter) => {
    return projects?.reduce((filtered, project) => {
        const filteredTasks = projects.filter(filter);
        if (filteredTasks?.length) {
            filtered.push({ ...project, tasks: filteredTasks });
        }
        return filtered;
    }, []);
}

const filterTaskByText = (projects, text) => {
    const searchText = text.toLowerCase();
    return filterTasks(projects, (task) => {
        const dueDate = task.dueDate;
        return task.title.toLowerCase().includes(searchText)
            || (task.due && Dateformat(dueDate, "dd.MM.yyyy").includes(searchText))
            || task.priority.toLowerCase() === searchText;
    });
}

const filterTasksToday = (projects) => {
    return filterTasks(projects, (task) => {
        const today = new Date();
        return task.dueDate
            && task.dueDate.getFullYear() === today.getFullYear()
            && task.dueDate.getMonth() === today.getMonth()
            && task.dueDate.getDate() === today.getDate();
    });
}

const filterTasksThisWeek = (projects) => {
    return filterTasks(projects, (task) => {
        return task.dueDate && getWeek(task.dueDate) === getWeek(new Date());
    });
}

const filterTasksThisMonth = (projects) => {
    return filterTasks(projects, (task) => {
        return task.dueDate && getMonth(task.dueDate) === getMonth(new Date());
    });
}

const filterTasksByDate = (projects, date) => {
    return filterTasks(projects, (task) => {
        return task.dueDate && task.dueDate.getFullYear() === date.getFullYear()
            && task.dueDate.getMonth() === date.getMonth()
            && task.dueDate.getDate() === date.getDate();
    });
}

const filterCriticalTasks = (projects) => {
    return filterTasks(projects, (task) => {
        return task.priority === "High";
    });
}

const filterCompletedTasks = (projects) => {
    return filterTasks(projects, (task) => {
        return task.isComplete;
    });
}

const filterAllTasks = (projects) => {
    return filterTasks(projects, (task) => {
        return task;
    });
}

export {
    filterTaskByText,
    filterCompletedTasks,
    filterCriticalTasks,
    filterAllTasks,
    filterTasksToday,
    filterTasksThisWeek,
    filterTasksThisMonth,
    filterTasksByDate,
}