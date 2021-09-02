import { useState } from "react";

const useFilter = (executeOnFilter) => {
    const [filter, setFilter] = useState({
        title: "",
        key: "",
        arg: null,
    });

    const filterTasksByText = (text) => {
        setFilter({
            title: `Search ${text}`,
            key: "filterTasksByText",
            arg: text,
        });
        executeOnFilter();
    }

    const filterAllTasks = () => {
        setFilter({
            title: "All Tasks",
            key: "filterAllTasks",
        });
        executeOnFilter();
    }

    const filterCriticalTasks = () => {
        setFilter({
            title: "Critical Tasks",
            key: "filterCriticalTasks",
        });
        executeOnFilter();
    }

    const filterCompletedTasks = () => {
        setFilter({
            title: "Completed Tasks",
            key: "filterCompletedTasks",
        });
        executeOnFilter();
    }

    const filterTasksToday = () => {
        setFilter({
            title: "Tasks Today",
            key: "filterTasksToday",
        });
        executeOnFilter();
    }

    const filterTasksThisWeek = () => {
        setFilter({
            title: "Tasks this Week",
            key: "filterTasksThisWeek",
        });
        executeOnFilter();
    }

    const filterTasksThisMonth = () => {
        setFilter({
            title: "Tasks this Month",
            key: "filterTasksThisMonth",
        });
        executeOnFilter();
    }

    return {
        filter,
        filterTasksByText,
        filterAllTasks,
        filterCriticalTasks,
        filterCompletedTasks,
        filterTasksToday,
        filterTasksThisWeek,
        filterTasksThisMonth,
    }
}

export { useFilter }