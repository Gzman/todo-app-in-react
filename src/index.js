import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter } from 'react-router-dom'
import { CurrentViewPortProvider } from "./context/currentViewPortContext"
import App from "./App"
import './index.css'
import "./mobile.css"

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <CurrentViewPortProvider>
        <App />
      </CurrentViewPortProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);