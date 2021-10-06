import { taskPriorities } from "./taskPriorities"
import { FILTER } from "../constants/filter"
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

const filterByText = (projects, text = "") => {
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

const [, , high] = taskPriorities;

const filterCritical = (projects) => {
    return filterTasks(projects, (task) => {
        return task.priority === high;
    });
}

const filterCompleted = (projects) => {
    return filterTasks(projects, (task) => {
        return task.isComplete;
    });
}

const filterExpired = (projects) => {
    return filterTasks(projects, (task) => {
        const today = new Date();
        today.setHours(0);
        return task.dueDate && !task.isComplete && (task.dueDate < today);
    });
}

const filterAll = (projects) => {
    return filterTasks(projects, (task) => {
        return task;
    });
}

const filterMapping = {
    [FILTER.SEARCH.key]: filterByText,
    [FILTER.CRITICAL.key]: filterCritical,
    [FILTER.ALL.key]: filterAll,
    [FILTER.COMPLETED.key]: filterCompleted,
    [FILTER.EXPIRED.key]: filterExpired,
    [FILTER.TODAY.key]: filterToday,
    [FILTER.THIS_WEEK.key]: filterThisWeek,
    [FILTER.THIS_MONTH.key]: filterThisMonth,
}

export {
    filterByText,
    filterCompleted,
    filterCritical,
    filterExpired,
    filterAll,
    filterToday,
    filterThisWeek,
    filterThisMonth,
    filterByThisDate,
    filterMapping,
}