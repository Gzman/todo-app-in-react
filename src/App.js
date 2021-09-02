import React from "react"
import { useHistory } from "react-router-dom"
import { Header } from "./components/header/Header"
import { SideBar } from "./components/sidebar/Sidebar"
import { Content } from "./components/content/Content"
import { useProjects } from "./hooks/useProjects"
import { useFilter } from "./hooks/useTaskFilter"
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
    filter,
    filterTasksByText,
    filterAllTasks,
    filterCriticalTasks,
    filterCompletedTasks,
    filterTasksToday,
    filterTasksThisWeek,
    filterTasksThisMonth
  } = useFilter(() => {
    history.replace("/filtered_results");
    setCurrentProjectId("");
  });

  return (
    <div className="App">
      <Header
        filterTasksByText={filterTasksByText}
        filterAllTasks={filterAllTasks}
        filterCriticalTasks={filterCriticalTasks}
        filterCompletedTasks={filterCompletedTasks}
      />
      <main>
        <SideBar
          projects={projects}
          selectedProjectId={currentProjectId}
          selectProject={selectProject}
          addProject={addProject}
          timeTaskFilter={{
            filterTasksToday,
            filterTasksThisWeek,
            filterTasksThisMonth,
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
          filter={filter}
        />
      </main>
    </div>
  );
}

export default App;
