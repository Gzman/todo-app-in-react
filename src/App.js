import { Header } from "./components/header/Header"
import { SideBar } from "./components/sidebar/Sidebar"
import { Content } from "./components/content/Content"
import { useProjects } from "./hooks/useProjects";
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

  const [selectedProjectId, setSelectedProjectId] = useState("inbox");

  return (
    <div className="App">
      <Header />
      <main>
        <SideBar
          projects={projects}
          selectedProjectId={selectedProjectId}
          setSelectedProjectId={setSelectedProjectId}
          addProject={addProject}
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
        />
      </main>
    </div>
  );
}

export default App;
