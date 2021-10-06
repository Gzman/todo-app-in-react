import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { CurrentViewPortProvider } from "./context/currentViewPortContext"
import { ProjectMenuContextProvider } from './context/projectMenuContext'
import App from "./App"
import './index.css'
import "./mobile.css"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <CurrentViewPortProvider>
        <ProjectMenuContextProvider>
          <App />
        </ProjectMenuContextProvider>
      </CurrentViewPortProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);