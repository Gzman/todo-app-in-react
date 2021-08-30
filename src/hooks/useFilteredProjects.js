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
    const [filtered, setFiltered] = useState([]);
    // better so: const [filtered, setFiltered] = useState({
        // projects: [],
        // filterType: "",
    // });

    const filterTasksByText = (text) => {
        setFiltered(
            filterByText(projects, text),
        )
    }

    const filterAllTasks = () => {
        setFiltered(
            [...projects],
        )
    }

    const filterCriticalTasks = () => {
        setFiltered(
            filterCritical(projects),
        )
    }

    const filterCompletedTasks = () => {
        setFiltered(
            filterCompleted(projects),
        );
    }

    const filterTasksToday = () => {
        setFiltered(
            filterToday(projects),
        )
    }

    const filterTasksThisWeek = () => {
        setFiltered(
            filterThisWeek(projects),
        );
    }

    const filterTasksThisMonth = () => {
        setFiltered(
            filterThisMonth(projects),
        );
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