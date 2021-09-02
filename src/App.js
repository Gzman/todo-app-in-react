import React, { useState } from "react"
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
    editProject,
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

  const [hideProjectMenu, setHideProjectMenu] = useState(0);

  const selectProject = (id) => {
    history.replace("/");
    setCurrentProjectId(id);
    setHideProjectMenu(prev => prev + 1);
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
    setHideProjectMenu(prev => prev + 1);
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
          editProject={editProject}
          timeTaskFilter={{
            filterTasksToday,
            filterTasksThisWeek,
            filterTasksThisMonth,
          }}
          hideProjectMenu={hideProjectMenu}
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
