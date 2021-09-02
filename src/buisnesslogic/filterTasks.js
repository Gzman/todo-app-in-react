import { format, getWeek, getMonth } from "date-fns"
import uniqid from "uniqid"

const filterTasks = (projects, filter) => {
    return projects?.reduce((filtered, project) => {
        const filteredTasks = project.tasks.filter(filter);
        if (filteredTasks?.length) {
            filtered.push({ ...project, filterId: uniqid(), tasks: filteredTasks });
        }
        return filtered;
    }, []);
}

const filterByText = (projects, text) => {
    const searchText = text.toLowerCase();
    return filterTasks(projects, (task) => {
        const dueDate = task.dueDate;
        return task.name.toLowerCase().includes(searchText)
            || (task.dueDate && format(dueDate, "dd.MM.yyyy").includes(searchText))
            || task.priority.toLowerCase() === searchText;
    });
}

const filterToday = (projects) => {
    return filterTasks(projects, (task) => {
        const today = new Date();
        return task.dueDate
            && task.dueDate.getFullYear() === today.getFullYear()
            && task.dueDate.getMonth() === today.getMonth()
            && task.dueDate.getDate() === today.getDate();
    });
}

const filterThisWeek = (projects) => {
    return filterTasks(projects, (task) => {
        return task.dueDate && getWeek(task.dueDate) === getWeek(new Date());
    });
}

const filterThisMonth = (projects) => {
    return filterTasks(projects, (task) => {
        return task.dueDate && getMonth(task.dueDate) === getMonth(new Date());
    });
}

const filterByThisDate = (projects, date) => {
    return filterTasks(projects, (task) => {
        return task.dueDate && task.dueDate.getFullYear() === date.getFullYear()
            && task.dueDate.getMonth() === date.getMonth()
            && task.dueDate.getDate() === date.getDate();
    });
}

const filterCritical = (projects) => {
    return filterTasks(projects, (task) => {
        return task.priority === "High";
    });
}

const filterCompleted = (projects) => {
    return filterTasks(projects, (task) => {
        return task.isComplete;
    });
}

const filterAll = (projects) => {
    return filterTasks(projects, (task) => {
        return task;
    });
}

const filterMapping = {
    "filterTasksByText": filterByText,
    "filterCriticalTasks": filterCritical,
    "filterAllTasks": filterAll,
    "filterCompletedTasks": filterCompleted,
    "filterTasksToday": filterToday,
    "filterTasksThisWeek": filterThisWeek,
    "filterTasksThisMonth": filterThisMonth,
}

export {
    filterByText,
    filterCompleted,
    filterCritical,
    filterAll,
    filterToday,
    filterThisWeek,
    filterThisMonth,
    filterByThisDate,
    filterMapping,
}