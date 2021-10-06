import React from "react"
import { Header } from "./components/header/Header"
import { SideBar } from "./components/sidebar/Sidebar"
import { Content } from "./components/content/Content"
import { useProjects } from "./hooks/useProjects"
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
  } = useProjects();

  return (
    <div className="App">
      <Header />
      <main>
        <SideBar
          projects={projects}
          addProject={addProject}
          editProject={editProject}
        />
        <Content
          projects={projects}
          removeProject={removeProject}
          addTask={addTask}
          editTask={editTask}
          removeTask={removeTask}
          moveTask={moveTask}
        />
      </main>
    </div>
  );
}

export default App;
