import React, { useEffect, useState } from "react"
import { Header } from "./components/header/Header"
import { SideBar } from "./components/sidebar/Sidebar"
import { Content } from "./components/content/Content"
import { useProjects } from "./hooks/useProjects"
import { useFilter } from "./hooks/useTaskFilter"
import { useNavigateContent } from "./hooks/useNavigateContent"
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
    moveTask,
    sortTasksAfterInsertion,
    sortTasksAfterName,
    sortTasksAfterDate,
    sortTasksAfterPriority,
    sortTasksAfterComplete,
    currentProjectId,
    setCurrentProjectId,
  } = useProjects();

  // const history = useHistory();
  // useEffect(() => {
  //   history.replace("/");
  // }, []);

  const { navigateTo } = useNavigateContent();

  const [hideProjectMenu, setHideProjectMenu] = useState(true);
  const closeProjectMenu = () => setHideProjectMenu(prev => !prev);

  const selectProject = (id) => {
    navigateTo("/", () => {
      setCurrentProjectId(id);
      closeProjectMenu();
    });
  }

  const {
    filter,
    filterTasksByText,
    filterAllTasks,
    filterCriticalTasks,
    filterCompletedTasks,
    filterExpiredTasks,
    filterTasksToday,
    filterTasksThisWeek,
    filterTasksThisMonth
  } = useFilter(() => {
    // history.replace("/filtered_results");
    // setCurrentProjectId("");
    // closeProjectMenu();
    navigateTo("/filtered_results", () => {
      setCurrentProjectId("");
      closeProjectMenu();
    })
  });

  return (
    <div className="App">
      <Header
        filterTasksByText={filterTasksByText}
        filterAllTasks={filterAllTasks}
        filterCriticalTasks={filterCriticalTasks}
        filterCompletedTasks={filterCompletedTasks}
        filterExpiredTasks={filterExpiredTasks}
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
          closeProjectMenu={closeProjectMenu}
        />
        <Content
          projects={projects}
          selectedProjectId={currentProjectId}
          selectProject={selectProject}
          removeProject={removeProject}
          addTask={addTask}
          editTask={editTask}
          removeTask={removeTask}
          moveTask={moveTask}
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
