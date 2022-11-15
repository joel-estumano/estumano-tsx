import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
//styles
import './index.scss'
import "./assets/fonts/poppins.scss";
//scripts
import "bootstrap/dist/js/bootstrap.bundle.min"

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
