import React from "react"
import { useHistory } from "react-router-dom"
import { Header } from "./components/header/Header"
import { SideBar } from "./components/sidebar/Sidebar"
import { Content } from "./components/content/Content"
import { useProjects } from "./hooks/useProjects"
import { useFilteredProjects } from "./hooks/useFilteredProjects"
import "./App.css"

function App() {
  const {
    projects,
    addProject,
    removeProject,
    addTask,
    editTask,
    removeTask,
    sortTasksAfterInsertion,
    sortTasksAfterName,
    sortTasksAfterDate,
    sortTasksAfterPriority,
    sortTasksAfterComplete,
    currentProjectId,
    setCurrentProjectId,
  } = useProjects();

  const history = useHistory();

  const selectProject = (id) => {
    history.replace("/");
    setCurrentProjectId(id);
  }

  const {
    filtered,
    filterTasksByText,
    filterAllTasks,
    filterCriticalTasks,
    filterCompletedTasks,
    filterTasksToday,
    filterTasksThisWeek,
    filterTasksThisMonth,
  } = useFilteredProjects(projects);

  const handleFiltering = (filter, ...args) => {
    history.replace("/filtered_results");
    setCurrentProjectId("");
    filter(...args);
  }

  return (
    <div className="App">
      <Header
        filterTasksByText={(...args) => handleFiltering(filterTasksByText, ...args)}
        filterAllTasks={(...args) => handleFiltering(filterAllTasks, ...args)}
        filterCriticalTasks={(...args) => handleFiltering(filterCriticalTasks, ...args)}
        filterCompletedTasks={(...args) => handleFiltering(filterCompletedTasks, ...args)}
      />
      <main>
        <SideBar
          projects={projects}
          selectedProjectId={currentProjectId}
          selectProject={selectProject}
          addProject={addProject}
          timeTaskFilter={{
            filterTasksToday: (...args) => handleFiltering(filterTasksToday, ...args),
            filterTasksThisWeek: (...args) => handleFiltering(filterTasksThisWeek, ...args),
            filterTasksThisMonth: (...args) => handleFiltering(filterTasksThisMonth, ...args),
          }}
        />
        <Content
          projects={projects}
          selectedProjectId={currentProjectId}
          selectProject={selectProject}
          removeProject={removeProject}
          addTask={addTask}
          editTask={editTask}
          removeTask={removeTask}
          taskSorting={{
            sortTasksAfterInsertion,
            sortTasksAfterName,
            sortTasksAfterDate,
            sortTasksAfterPriority,
            sortTasksAfterComplete,
          }}
          filtered={filtered}
        />
      </main>
    </div>
  );
}

export default App;
