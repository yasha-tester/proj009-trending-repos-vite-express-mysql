import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RepoList from './RepoList.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <RepoList />
  </React.StrictMode>,
)
