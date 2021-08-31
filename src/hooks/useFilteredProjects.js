import { useState } from "react"
import {
    filterByText,
    filterCritical,
    filterCompleted,
    filterToday,
    filterThisWeek,
    filterThisMonth,
} from "../buisnesslogic/filterTasks"

const useFilteredProjects = (projects) => {
    const [filtered, setFiltered] = useState(
        {
            projects: [],
            filterName: "",
        }
    )

    const filterTasksByText = (text) => {
        setFiltered(filtered => ({
            projects: filterByText(projects, text),
            filterName: `Search: ${text}`,
        }));
    }

    const filterAllTasks = () => {
        setFiltered(filtered => ({
            projects: [...projects],
            filterName: "All Tasks",
        }));
    }

    const filterCriticalTasks = () => {
        setFiltered(filtered => ({
            projects: filterCritical(projects),
            filterName: "Critical Tasks",
        }));
    }

    const filterCompletedTasks = () => {
        setFiltered( filtered => ({
            projects: filterCompleted(projects),
            filterName: "Completed Tasks"
        }));
    }

    const filterTasksToday = () => {
        setFiltered(filtered => ({
            projects: filterToday(projects),
            filterName: "Tasks Today",
        }));
    }

    const filterTasksThisWeek = () => {
        setFiltered(filtered => ({
            projects: filterThisWeek(projects),
            filterName: "Tasks this Week",
        }));
    }

    const filterTasksThisMonth = () => {
        setFiltered( filtered => ({
            projects: filterThisMonth(projects),
            filterName: "Tasks this month",
        }));
    }

    return {
        filtered,
        filterTasksByText,
        filterAllTasks,
        filterCriticalTasks,
        filterCompletedTasks,
        filterTasksToday,
        filterTasksThisWeek,
        filterTasksThisMonth,
    }
}

export { useFilteredProjects }