import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'
import { CurrentViewPortProvider } from "./context/currentViewPortContext"
import App from "./App"
import './index.css'
import "./mobile.css"

ReactDOM.render(
  <React.StrictMode>
    <HashRouter>
      <CurrentViewPortProvider>
        <App />
      </CurrentViewPortProvider>
    </HashRouter>
  </React.StrictMode>,
  document.getElementById('root')
);