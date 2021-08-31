import React, { useState } from "react"
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

  const [
    renderProjectView,
    setRenderProjectView
  ] = useState(true);

  const selectProject = (id) => {
    setRenderProjectView(true);
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
          setRenderProjectView={setRenderProjectView}
          renderProjectView={renderProjectView}
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
