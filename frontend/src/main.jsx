import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import RepoList from './RepoList.jsx'
import Timer from './Timer.jsx'
import ForceSync from './ForceSync.jsx'
import SearchBar from './SearchBar.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <Timer />
    <ForceSync />
    <SearchBar />
    <RepoList />
  </React.StrictMode>,
)
