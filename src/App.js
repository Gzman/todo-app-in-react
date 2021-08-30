import { Header } from "./components/header/Header"
import { SideBar } from "./components/sidebar/Sidebar"
import { Content } from "./components/content/Content"
import { useProjects } from "./hooks/useProjects"
import { useFilteredProjects } from "./hooks/useFilteredProjects"
import { useState } from "react";

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
  } = useProjects();

  const [
    selectedProjectId,
    setSelectedProjectId] = useState("inbox");

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
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
          addProject={addProject}
          timeTaskFilter={{
            filterTasksToday,
            filterTasksThisWeek,
            filterTasksThisMonth,
          }}
        />
        <Content
          projects={projects}
          selectedProjectId={selectedProjectId}
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
