import { Header } from "./components/header/Header"
import { SideBar } from "./components/sidebar/Sidebar"
import { Content } from "./components/content/Content"

function App() {
  return (
    <div className="App">
      <Header />
      <main>
        <SideBar />
        <Content />
      </main>
    </div>
  );
}

export default App;
